import Headerbox from '@/components/Headerbox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalancebox from '@/components/TotalBalancebox';
// import React from 'react'

const Home = () => {
 const loggedIn={firstName:'Nandini',lastName:'Singh',email:'contact@nandinisingh.in'};  
  return (
   <section className="home">


     <div className="home-conent">
     <header className="home-header">
      <Headerbox
      type="greeting"
      title="Welcome"
      user={loggedIn?.firstName || 'Guest'}
      subtext="Access and manage your account and transactions efficiently."
  
      
      
      />
    

<TotalBalancebox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.45}
          />

     </header>
    RECENT TRANSACTIONS




     </div>

  <RightSidebar
   user={loggedIn}
   transactions={[]}
   banks={[{currentBalance:123.50},{currentBalance:500.50}]}
  />






   </section>


  )
}

export default Home