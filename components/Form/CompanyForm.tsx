import React, { useEffect, useState, FormEvent } from 'react';

export default function UserForm() {
  const [name, setName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchName = async () => {
      try {
        const response = await fetch('/api/company');
        const data = await response.json();
        setName(data.name);
      } catch (error) {
        console.error('Error fetching user name:', error);
      }
    };

    fetchName();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/company', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      if (!response.ok) {
        throw new Error('Failed to update name');
      }

      const data = await response.json();
      setName(data.name);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex items-center gap-4">
      <div>
        <label htmlFor="name" className='text-sm'>Company Name: </label>
        <input
          className="p-2 rounded text-sm shadow-sm"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className={`${
          loading ? 'bg-gray-400' : 'bg-green-700'
        } text-white rounded-md p-2 text-sm shadow-md hover:shadow-xl hover:bg-green-700/90`}
      >
        {loading ? 'Updating...' : 'Update Name'}
      </button>
    </form>
  );
}
