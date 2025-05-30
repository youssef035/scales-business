'use client';

import React, { useEffect, useState, useRef } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

export default function FloatingFAQButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setShowNotification(true);
      
      // Remove notification class after animation completes
      const notificationTimer = setTimeout(() => {
        setShowNotification(false);
      }, 6000); // 3 pulses * 2 seconds each
      
      return () => clearTimeout(notificationTimer);
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (messageRef.current && !messageRef.current.contains(event.target as Node)) {
        setIsMessageVisible(false);
      }
    };

    if (isMessageVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMessageVisible]);

  const handleClick = () => {
    setIsMessageVisible(!isMessageVisible);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-24 right-6 z-50">
      {isMessageVisible && (
        <div ref={messageRef} className="absolute bottom-16 right-0 bg-white p-4 rounded-lg shadow-lg w-64 animate-fadeIn">
          <p className="text-gray-800 mb-2">Comment pouvons-nous vous aider aujourd'hui ?</p>
          <div className="flex space-x-2">
            <button 
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                setIsMessageVisible(false);
              }}
              className="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700 transition-colors"
            >
              Products
            </button>
            <button 
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                setIsMessageVisible(false);
              }}
              className="bg-primary-600 text-white px-3 py-1 rounded text-sm hover:bg-primary-700 transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
      <button
        onClick={handleClick}
        className={`bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 hover:scale-110 ${
          showNotification ? 'animate-notification' : ''
        }`}
        aria-label="FAQ"
      >
        <FaQuestionCircle size={24} />
      </button>
    </div>
  );
} 