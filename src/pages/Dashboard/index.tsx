import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { Link } from 'react-router-dom';
import { io } from 'socket.io-client';

import Card from '../../components/Card';
import Button from '../../components/Button';

import api from '../../services/api';

import {
  Container,
  Notifications,
  Notification,
  Spots,
  Spot,
  Thumbnail,
} from './styles';

interface ISpot {
  id: string;
  thumbnail: string;
  company: string;
  price: number;
}

interface INotification {
  id: string;
  user: { email: string };
  spot: ISpot;
  date: Date;
  parsedDate: string;
}

const Dashboard: React.FC = () => {
  const [spots, setSpots] = useState<ISpot[]>([]);
  const [requests, setRequests] = useState<INotification[]>([]);

  const user_id = localStorage.getItem('user');

  const socket = useMemo(
    () => io('http://localhost:3333', { query: { user_id } }),
    [user_id],
  );

  const handleAccept = useCallback(
    async id => {
      await api.post(`/bookings/${id}/rejections`);

      setRequests(requests.filter(request => request.id !== id));
    },
    [requests],
  );

  const handleReject = useCallback(
    async id => {
      await api.post(`/bookings/${id}/rejections`);

      setRequests(requests.filter(request => request.id !== id));
    },
    [requests],
  );

  useEffect(() => {
    socket.on('booking_request', (data: INotification) => {
      data.parsedDate = format(new Date(data.date), "dd 'de' MMMM 'de' yyyy", {
        locale: ptBr,
      });

      setRequests([...requests, data]);
    });
  }, [socket, requests]);

  useEffect(() => {
    async function loadSpots() {
      const response = await api.get('/dashboard', { headers: { user_id } });

      setSpots(response.data);
    }

    loadSpots();
  }, [user_id]);

  return (
    <Container>
      <Card>
        <Notifications>
          {requests.map(request => (
            <Notification key={request.id}>
              <p>
                <strong>{request.user.email}</strong> está solicitando uma
                reserva em <strong>{request.spot.company}</strong> para a data:{' '}
                <strong>{request.parsedDate}</strong>
              </p>

              <button
                type="button"
                onClick={() => handleAccept(request.id)}
                style={{ color: '#84C870' }}
              >
                ACEITAR
              </button>

              <button
                type="button"
                onClick={() => handleReject(request.id)}
                style={{ color: '#E55E5E' }}
              >
                REJEITAR
              </button>
            </Notification>
          ))}
        </Notifications>

        <Spots>
          {spots.length >= 1 && spots ? (
            spots.map(spot => (
              <Spot key={spot.id}>
                <Thumbnail thumb={spot.thumbnail} />

                <strong>{spot.company}</strong>

                <span>{spot.price ? `R$ ${spot.price}/dia` : 'Gratuito'}</span>
              </Spot>
            ))
          ) : (
            <div>
              <strong>Nenhum spot cadastrado</strong>
            </div>
          )}
        </Spots>

        <Link to="/new">
          <Button>Cadastrar novo spot</Button>
        </Link>
      </Card>
    </Container>
  );
};

export default Dashboard;
