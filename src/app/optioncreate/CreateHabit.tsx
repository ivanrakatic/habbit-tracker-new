import React from 'react';
import '../../css/CreateHabit.css';

const CreateHabit = () => {
  return (
    <div className="create-habit-container">
      <button aria-label="Close" className="close-btn" type="button">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
      <h1 className="text-center font-extrabold text-xl mb-6">
        Add New Habit
      </h1>
      <div className="create-habit-btn-container">
        <button className="create-habit-btn" type="button">
          <div className="plus-sign">
            +
          </div>
          <span className="font-extrabold text-lg text-black">Create custom habit</span>
        </button>
      </div>

      {/* Popular Habits Section */}
      <section className="habits-section">
        <h2 className="section-title">Popular Habits</h2>
        <p className="section-description">Just starting out or want to try something new? These habits are for you!</p>
        <ul className="habit-list">
          {[
            { emoji: "💪", title: "Workout", description: "Hit the gym hard or take your energy outdoors for a run – you’ve got this!" },
            { emoji: "💧", title: "Drink water", description: "Keep your body fueled don’t forget to drink water throughout the day" },
            { emoji: "📚", title: "Read", description: "Take a moment to unwind with a good book and some you-time" },
            { emoji: "🧘‍♂️", title: "Meditate", description: "Relax and cope with stress by centering yourself" }
          ].map((habit, index) => (
            <li key={index} className="habit-item-wrapper">
              <button className="habit-item" type="button">
                <div className="habit-emoji">
                  {habit.emoji}
                </div>
                <div className="habit-text">
                  <p className="habit-title">{habit.title}</p>
                  <p className="habit-description">{habit.description}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Health Habits Section */}
      <section className="habits-section">
        <h2 className="section-title">Health Habits</h2>
        <p className="section-description">Just starting out or want to try something new? These habits are for you!</p>
        <ul className="habit-list">
          {[
            { emoji: "👟", title: "Steps", description: "Keep moving and aim for more steps during the day" },
            { emoji: "🏋️‍♂️", title: "Exercise", description: "Move your body daily with some exercise" },
            { emoji: "🔥", title: "Burn calories", description: "Try to burn a few extra calories each day" },
            { emoji: "🛏️", title: "Sleep", description: "Prioritize quality sleep every night" }
          ].map((habit, index) => (
            <li key={index} className="habit-item-wrapper">
              <button className="habit-item" type="button">
                <div className="habit-emoji">
                  {habit.emoji}
                </div>
                <div className="habit-text">
                  <p className="habit-title">{habit.title}</p>
                  <p className="habit-description">{habit.description}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CreateHabit;