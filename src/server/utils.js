export const mergeDefaultQueries = (defaultQueries, requestQueries) => {
  let queries = ''
  
  for (let i in requestQueries)
    if (requestQueries[i]) defaultQueries[i] = requestQueries[i]
  
  for (let i in defaultQueries)
    queries += `&${i}=${defaultQueries[i]}`

  return queries
}

export default {
  mergeDefaultQueries
}