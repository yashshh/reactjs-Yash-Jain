import axios from 'axios'

class CompanyListService{

    getCompanyList() {
        return axios.get('http://localhost:8080/companies')
    }

}
export default new CompanyListService()