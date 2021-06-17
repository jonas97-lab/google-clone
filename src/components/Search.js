import React, { useState } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import MicIonc from '@material-ui/icons/Mic'
import '../components/Search.css'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

function Search({ hideButtons }) {
	const [{}, dispatch] = useStateValue()
	const [input, setInput] = useState('')
	const history = useHistory()

	const search = (e) => {
		e.preventDefault()
		history.push('/searchpage')

		dispatch({
			type: actionTypes.SET_SEARCH_TERM,
			term: input,
		})
	}

	return (
		<form className='search' onSubmit={search}>
			<div className='search__input'>
				<SearchIcon className='search__inputIcon' />
				<input value={input} onChange={(e) => setInput(e.target.value)} />
				<MicIonc />
			</div>

			<div className='search__buttons'>
				{!hideButtons ? (
					<div className='search__buttons'>
						<Button onClick={search} variant='outlined'>
							Google Search
						</Button>
						<Button variant='outlined'>I'm Feeling Lucky</Button>
					</div>
				) : (
					<div className='search__buttons'>
						<Button
							className='search__buttonsHidden'
							onClick={search}
							variant='outlined'
						>
							Google Search
						</Button>
						<Button className='search__buttonsHidden' variant='outlined'>
							I'm Feeling Lucky
						</Button>
					</div>
				)}
			</div>
		</form>
	)
}

export default Search
