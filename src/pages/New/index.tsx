import React, { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';

import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';

import camera from '../../assets/camera.svg';

import api from '../../services/api';

import { Container, FileInput, Label } from './styles';

interface ISpot {
  thumbnail: File;
  company: string;
  techs: string;
  price: string;
}

const New: React.FC = () => {
  const history = useHistory();

  const [thumbnail, setThumnail] = useState<any>(undefined);

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail]);

  const handleChangeThumbnail = useCallback((event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    if (target?.files) {
      const file = target.files[0];
      console.log(file);

      setThumnail(file);
    }
  }, []);

  const handleSubmit = useCallback(
    async (data: ISpot) => {
      const formData = new FormData();
      const user_id = localStorage.getItem('user');

      formData.append('thumbnail', thumbnail);
      formData.append('company', data.company);
      formData.append('techs', data.techs);
      formData.append('price', data.price);

      await api.post('/spots', formData, { headers: { user_id } });

      history.push('/dashboard');
    },
    [history, thumbnail],
  );

  return (
    <Container>
      <Card>
        <Form onSubmit={handleSubmit}>
          <FileInput preview={preview}>
            <input type="file" onChange={handleChangeThumbnail} />

            <img src={camera} alt="Selecione uma imagem" />
          </FileInput>

          <Label htmlFor="company">EMPRESA</Label>

          <Input
            id="company"
            name="company"
            placeholder="Sua empresa incrível"
          />

          <Label htmlFor="techs">
            TECNOLOGIAS * <span>(separadas por vírgula)</span>
          </Label>

          <Input
            id="techs"
            name="techs"
            placeholder="Quais tecnologias usam?"
          />

          <Label htmlFor="price">
            VALOR DA DIÁRIA * <span>(em branco para GRATUITO)</span>
          </Label>

          <Input id="price" name="price" placeholder="Valor cobrado por dia" />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Card>
    </Container>
  );
};

export default New;
