import axios from 'axios'

class CompanyListService{

    getCompanyList() {
        return axios.get('http://localhost:8080/companies')
    }

    findUsers(user) {
        console.log(user)
        return axios.post('http://localhost:8080/users',user)
    }

    getwatchList(userid) {
        return axios.get(`http://localhost:8080/watchList/${userid}`)
    }

    addWatchList(watchList) {
        return axios.post('http://localhost:8080/watchList',watchList)
    }

    deleteWatchList(companyid,userid) {
        console.log(companyid,userid)
        return axios.delete(`http://localhost:8080/watchList/${companyid}/${userid}`)
    }

    getPerformanceList(companyCode1, companyCode2, from, to) {
        return axios.get(`http://localhost:8080/stocks/compare-performance/${companyCode1}/${companyCode2}/${from}/${to}`)
    }

}
export default new CompanyListService()