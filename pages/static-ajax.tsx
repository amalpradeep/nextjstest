import axios from 'axios';
import React, { useEffect, useState } from 'react';

const StaticAjax = () => {
  const [user, setUser] = useState<any>({});

  const getCustomersData = () => {
    axios
      .get('https://dummyjson.com/users')
      .then((data) => setUser(data?.data?.users?.[0]))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getCustomersData();
  }, []);
  

  return (
    <div className="flex min-h-screen flex-col items-center p-24">
        <h2 className="font-bold	text-2xl">Static Ajax Page</h2>
      <h2 className="font-bold	text-xl">Hi {user?.firstName && user?.firstName}</h2>
      <div className="py-2 w-1/2">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          leo leo, convallis quis luctus sit amet, pharetra ac nunc. Vestibulum
          sed mollis odio, sed consequat metus. Cras blandit metus sapien, vitae
          consequat tellus egestas sed. Proin lobortis tortor nisl, id vulputate
          diam scelerisque id. Integer vel augue pharetra urna porta mattis. Ut
          vitae arcu non orci auctor accumsan. Cras vel ipsum sit amet sem
          scelerisque feugiat. Cras volutpat, felis imperdiet tempus molestie,
          quam erat hendrerit nulla, et consectetur arcu urna ac turpis. Vivamus
          pharetra, mauris id scelerisque posuere, eros ligula sagittis odio,
          quis sodales ex justo eu ligula. Aliquam pretium nisi id dignissim
          auctor. Proin scelerisque bibendum nibh, id elementum erat. Curabitur
          at erat a nulla porta hendrerit vitae nec turpis. Donec egestas
          sodales tristique. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Donec feugiat egestas tempus. Ut accumsan rhoncus turpis non
          ultricies. Duis ullamcorper vel elit sed egestas. Praesent ac enim in
          ante pharetra dapibus. Cras sed ex fermentum, consequat neque a,
          malesuada ante. Cras quis tempus dolor. Maecenas tempus massa eu erat
        </p>
      </div>
    </div>
  );
};

export default StaticAjax;
