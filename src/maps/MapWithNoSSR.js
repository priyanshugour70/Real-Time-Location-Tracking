import dynamic from 'next/dynamic';
const MapWithNoSSR = dynamic(() => import('../maps/LeafletMap'), {
    ssr: false,
  });


export default MapWithNoSSR
