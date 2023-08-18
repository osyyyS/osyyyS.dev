'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://ioohqagvtemqnpcrnlai.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlvb2hxYWd2dGVtcW5wY3JubGFpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIzNzQxMTEsImV4cCI6MjAwNzk1MDExMX0.jN0-0qAPWfbfKK9zFJTS9wSysdrGjJEvSLQDW0jeW9E')

export default function Clicker() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        let { data: Clicker, error } = await supabase
          .from('Clicker')
          .select()

        setCount(Clicker.find(item => item.id == 1).clicks)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on component mount

  const channelA = supabase
    .channel('schema-db-changes')
    .on(
      'postgres_changes',
      {
        event: '*',
        schema: 'public',
      },
      (payload) => setCount(payload.new.clicks)
    )
    .subscribe()

  async function handleClick() {
    let newCount = count + 1;
    const { data, error } = await supabase
      .from('Clicker')
      .update({ clicks: newCount })
      .eq('id', 1)
      .select()
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}