import { useState, useEffect } from 'react';
import MediaRow from './MediaRow';
import fetchData from '../api/fetchData';

function App() {
  const [mediaArray, setMediaArray] = useState([]);

  const getMedia = async () => {
    try {
      const json = await fetchData('test.json');
      setMediaArray(json);
      console.log('Media data fetched successfully:', json);
    } catch (error) {
      console.error('Error fetching media:', error);
    }
  };

  useEffect(() => {
    getMedia();
  }, []);

  return (
    <div className="App">
      <h1>Media Gallery</h1>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
