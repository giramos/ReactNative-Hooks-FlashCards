import { useEffect, useState } from 'react';
import { onSnapshot, query, where } from 'firebase/firestore';
import { categoriesRef, cardsRef } from '../api/db';
import { useUser } from './auth';

export const useCategories = () => {
  const [user] = useUser();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!user) return;

    // Crea la consulta usando query() y where()
    const q = query(categoriesRef, where('userId', '==', user.uid));

    const unsub = onSnapshot(q, (qs) => {
      const results = qs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCategories(results);
    });

    return unsub;
  }, [user]);

  return categories;
};


export const useCards = (categoryId) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // Crea la consulta usando query() y where()
    const q = query(cardsRef, where('categoryId', '==', categoryId));
    
    const unsub = onSnapshot(q, (qs) => {
      const results = qs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCards(results);
    });

    return unsub;
  }, [categoryId]);

  return cards;
};
