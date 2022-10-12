import {
	BrowserRouter as Router,
	Routes,
	Route,
} from 'react-router-dom';

import { useSelector } from 'react-redux';

import MusicPlayer from './components/MusicPlayer';
import {
	AroundYou,
	ArtistDetails,
	Discover,
	Search,
	SongDetails,
	TopArtists,
	TopCharts,
} from './pages';

function App() {
	const { activeSong } = useSelector((state) => state.player);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Discover />} />
				<Route path='/top-artists' element={<TopArtists />} />
				<Route path='/top-charts' element={<TopCharts />} />
				<Route path='/around-you' element={<AroundYou />} />
				<Route path='/artists/:id' element={<ArtistDetails />} />
				<Route path='/songs/:songid' element={<SongDetails />} />
				<Route path='/search/:searchTerm' element={<Search />} />
			</Routes>
			{activeSong?.title && (
				<div className='sticky h-28  bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10'>
					<MusicPlayer />
				</div>
			)}
		</div>
	);
}

export default App;
