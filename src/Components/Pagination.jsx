import React, { Component } from 'react'

class Pagination extends Component {

  state = {
    userData: [],
    pageNumber: 0
  }

  componentDidMount() {
    this.getusersData()
  }

  getusersData = async () => {
    const response = await fetch(`https://dummyapi.io/data/v1/user?page=${this.state.pageNumber}&limit=10`,
      {
        method: 'GET',
        headers: {
          'app-id': '633e33e98efd49504c9c7643'
        }
      }
    )
    const { data } = await response.json()
    console.log(data)
    this.setState({ userData: data })
  }

  pagination = (num) => {
      this.setState({pageNumber: num})
  }

  componentDidUpdate(prevsProps, prevsState){
    if(this.state.pageNumber !== prevsState.pageNumber){
          this.getusersData()
    }
  }

  render() {
    return (
      <div>
        <h2>Pagination</h2>
        <div className='row'>
          {this.state.userData && this.state.userData.length > 0 &&
            this.state.userData.map((user) => (
              <div className='col-md-6 mt-2'>
                <div className='card'>
                  <div className='row'>
                    <div className='col-md-3'>
                      <img className='img-fluid' src={user.picture} />
                    </div>
                    <div className='col-md-9'>
                      <h4>{user.id}</h4>
                      <p>{user.title} {user.firstName} {user.lastName}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        {
          [1,2,3,4,5,6,7,8,9].map((num) => (
            <button className='btn btn-primary me-1 my-3' 
            onClick={() => {this.pagination(num)}}
            >{num}</button>
          ))
        }
      </div>
    )
  }
}

export default Pagination