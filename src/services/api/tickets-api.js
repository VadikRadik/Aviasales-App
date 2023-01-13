export default class TicketsApi {
  searchKey = null
  baseUrl = 'https://aviasales-test-api.kata.academy'

  async updateSearchKey() {
    this.searchKey = await fetch(`${this.baseUrl}/search`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(`Unable to fetch api key, responce status: ${response.status}`)
        }
      })
      .then((result) => {
        return result.searchId
      })
      .catch((error) => {
        throw error
      })
  }

  async getTicketsBatch(resultHandler, responseErrorHandler, netErrorHandler) {
    if (this.searchKey === null) {
      await this.updateSearchKey()
    }

    fetch(`${this.baseUrl}/tickets?searchId=${this.searchKey}`)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          responseErrorHandler(response.status)
        }
      })
      .then((result) => {
        if (result) {
          if (result.stop) {
            this.searchKey = null
          }
          resultHandler(result)
        }
      })
      .catch((error) => {
        netErrorHandler(new Error(`Unable to fetch tickets, error: ${error}`))
      })
  }
}
