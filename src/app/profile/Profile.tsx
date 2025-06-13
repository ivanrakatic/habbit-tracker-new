import React from 'react';
import '../../css/Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      {/* Header dengan Menu dan Settings */}
      <header className="flex items-center justify-between mb-4 px-2">
        <button aria-label="Menu" className="space-y-1.5">
          <span className="block w-6 h-[2px] bg-black rounded"></span>
          <span className="block w-6 h-[2px] bg-black rounded"></span>
          <span className="block w-6 h-[2px] bg-black rounded"></span>
        </button>
        <h2 className="text-base font-semibold">Your Profile</h2>
        <button aria-label="Settings" className="text-black text-lg">
          <i className="fas fa-cog"></i>
        </button>
      </header>

      {/* Profile Card */}
      <section aria-label="User profile card" className="profile-card">
        <div className="flex items-center gap-4 p-4">
          <img 
            alt="User Profile" 
            className="profile-image" 
            src="https://storage.googleapis.com/a1aa/image/88d6775d-072c-4593-28e9-c2d054a88432.jpg" 
          />
          <div>
            <p className="profile-name">Labib</p>
            <p className="profile-text">Name</p>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="flex border-t border-purple-600 divide-x divide-purple-600 text-purple-900">
          <div className="profile-stat">
            <p className="profile-stat-text">total streak</p>
            <p className="profile-stat-value">20</p>
          </div>
          <div className="profile-stat">
            <p className="profile-stat-text">Task completed</p>
            <p className="profile-stat-value">25</p>
          </div>
        </div>
      </section>

      {/* Day Tracking */}
      <section aria-label="Day Tracking" className="day-tracking">
        <h3 className="section-title">Day Tracking</h3>
        <ul className="days">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, index) => (
            <li key={index} className="day-item">
              <div className={`day-button ${day === 'Thu' ? 'active' : ''}`}>
                {index + 14}
              </div>
              <span>{day}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Daily Quote */}
      <section aria-label="Daily Quote" className="daily-quote">
        <h3 className="section-title">Daily Quote</h3>
        <div className="quote-container">
          <span className="quote-mark">“</span>
          <p className="quote-text">
            Ubur ubur ikan<br />
            lele<br />
            workout dong lee
          </p>
          <span className="quote-mark">”</span>
        </div>
      </section>
    </div>
  );
};

export default Profile;