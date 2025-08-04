import React, { useState, useEffect } from 'react';
import inteliLogo from './imgs/inteliblcok.jpg';

const Calendario = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  // Mock data for upcoming events
  const mockEvents = [];

  useEffect(() => {
    setTimeout(() => {
      setEvents(mockEvents);
      setLoading(false);
    }, 1000);
  }, []);

  const getFilteredEvents = () => {
    if (filter === 'all') return events;
    return events.filter(event => event.category === filter);
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'bootcamp': return 'fas fa-tools';
      case 'hackathon': return 'fas fa-code';
      case 'palestra': return 'fas fa-microphone';
      case 'meetup': return 'fas fa-users';
      case 'curso': return 'fas fa-graduation-cap';
      case 'conferencia': return 'fas fa-building';
      default: return 'fas fa-calendar';
    }
  };

  const getCategoryName = (category) => {
    switch (category) {
      case 'bootcamp': return 'Bootcamp';
      case 'hackathon': return 'Hackathon';
      case 'palestra': return 'Palestra';
      case 'meetup': return 'Meetup';
      case 'curso': return 'Curso';
      case 'conferencia': return 'Conferência';
      default: return 'Evento';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'bootcamp': return '#ff6b6b';
      case 'hackathon': return '#4ecdc4';
      case 'palestra': return '#45b7d1';
      case 'meetup': return '#96ceb4';
      case 'curso': return '#feca57';
      case 'conferencia': return '#ff9ff3';
      default: return '#6c5ce7';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming': return '#00b894';
      case 'ongoing': return '#fdcb6e';
      case 'completed': return '#6c5ce7';
      default: return '#636e72';
    }
  };

  const shareEvent = async (event) => {
    const shareData = {
      title: event.title,
      text: `${event.title} - ${event.description}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(`${event.title}\n${event.description}\n${window.location.href}`);
        alert('Link do evento copiado para a área de transferência!');
      }
    } catch (error) {
      console.error('Erro ao compartilhar:', error);
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(`${event.title}\n${event.description}\n${window.location.href}`);
        alert('Link do evento copiado para a área de transferência!');
      } catch (clipboardError) {
        console.error('Erro ao copiar para área de transferência:', clipboardError);
        alert('Erro ao compartilhar o evento');
      }
    }
  };

  if (loading) {
    return (
      <div className="calendario-page">
        <div className="calendario-loading">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Carregando eventos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="calendario-page">
      <div className="calendario-header">
        <div className="calendario-header-content">
          <div className="calendario-title">
            <i className="fas fa-calendar-alt"></i>
            <h1>Calendário de Eventos</h1>
          </div>
          <p>Confira os próximos eventos da comunidade blockchain</p>
        </div>
        <div className="calendario-logo">
          <img src={inteliLogo} alt="Inteli Logo" />
        </div>
      </div>

      <div className="calendario-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          <i className="fas fa-list"></i>
          Todos
        </button>
        <button
          className={`filter-btn ${filter === 'bootcamp' ? 'active' : ''}`}
          onClick={() => setFilter('bootcamp')}
        >
          <i className="fas fa-tools"></i>
          Bootcamps
        </button>
        <button
          className={`filter-btn ${filter === 'hackathon' ? 'active' : ''}`}
          onClick={() => setFilter('hackathon')}
        >
          <i className="fas fa-code"></i>
          Hackathons
        </button>
        <button
          className={`filter-btn ${filter === 'palestra' ? 'active' : ''}`}
          onClick={() => setFilter('palestra')}
        >
          <i className="fas fa-microphone"></i>
          Palestras
        </button>
        <button
          className={`filter-btn ${filter === 'meetup' ? 'active' : ''}`}
          onClick={() => setFilter('meetup')}
        >
          <i className="fas fa-users"></i>
          Meetups
        </button>
      </div>

      <div className="events-timeline">
        {getFilteredEvents().map((event, index) => (
          <div key={event.id} className="event-card">
            <div className="event-timeline">
              <div 
                className="event-dot"
                style={{ backgroundColor: getCategoryColor(event.category) }}
              ></div>
              {index < getFilteredEvents().length - 1 && (
                <div className="timeline-line"></div>
              )}
            </div>
            
            <div className="event-content">
              <div className="event-header">
                <div className="event-category">
                  <i className={getCategoryIcon(event.category)}></i>
                  <span>{getCategoryName(event.category)}</span>
                </div>
                <div 
                  className="event-status"
                  style={{ backgroundColor: getStatusColor(event.status) }}
                >
                  {event.status === 'upcoming' ? 'Próximo' : event.status}
                </div>
              </div>
              
              <h3 className="event-title">{event.title}</h3>
              <p className="event-description">{event.description}</p>
              
              <div className="event-details">
                <div className="event-info">
                  <i className="fas fa-calendar"></i>
                  <span>{formatDate(event.date)} às {event.time}</span>
                </div>
                <div className="event-info">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>{event.location}</span>
                </div>
                <div className="event-info">
                  <i className="fas fa-users"></i>
                  <span>{event.attendees}/{event.maxAttendees} participantes</span>
                </div>
              </div>
              
                             <div className="event-actions">
                 <button 
                   className="event-btn secondary"
                   onClick={() => shareEvent(event)}
                 >
                   <i className="fas fa-share"></i>
                   Compartilhar
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={inteliLogo} alt="Inteli Blockchain" className="footer-logo-img" />
          </div>
          <p className="footer-text">
            Conectando o futuro da tecnologia blockchain através de inovação, 
            educação e colaboração.
          </p>
          <p className="footer-copyright">
            © 2025 Inteli Blockchain. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Calendario; 