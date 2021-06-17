import React, { useState, useEffect } from 'react'

function useGoogleSearch(term) {
	const API_KEY = 'AIzaSyB4M5hyrw0UKNeA7uHhHV_V1gdBQ9jb4r8'
	const CONTEXT_KEY = '2100ac7296cfeba08'
	const [data, setData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			fetch(
				`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
			)
				.then((response) => response.json())
				.then((results) => {
					setData(results)
				})
		}
		fetchData()
	}, [term])

	return { data }
}

export default useGoogleSearch
