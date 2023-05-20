import PropTypes from "prop-types"

import users from '../assets/users'
import data from '../assets/data'
import friends from '../assets/friends_list'
import transactions from '../assets/transactions_list'
import User from './User'
import Statistics from "./Statistics";
import Friends from "./Friends"
import Transactions from "./Transactions"



export default function App() {
  return (
    <>
      <h2>Task 1</h2>
      <User key={users.tag}
      userName={users.username}
      userTag={users.tag}
      userLocation={users.location}
      userAvatar={users.avatar}
      followers={users.stats.followers}
      views={users.stats.views}
      likes={users.stats.likes}
      />

      <h2>Task 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />

      <h2>Task 3</h2>
      <Friends friends={friends} />;

      <h2>Task 4</h2>
      <Transactions items={transactions } />
    </>

  );
};

App.propTypes = {
  key: PropTypes.string,
};

