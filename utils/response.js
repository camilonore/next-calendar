const responseSuccess = (res, data, status) => {
  res.status(status || 200).json({
    success: true,
    data: data
  })
}

const responseError = (res, status, error) => {
  console.error('[response error] ' + error)
  res.status(status || 400).json({
    success: false
  })
}

export { responseSuccess, responseError }
