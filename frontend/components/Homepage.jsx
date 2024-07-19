import React from 'react';

const Homepage = () => {

  return (
    <div>
        <button>SignIn</button>
        <Link to="/auth/signup">
            <button>SignUp</button>
        </Link>
    </div>
  )
}

export default Homepage;