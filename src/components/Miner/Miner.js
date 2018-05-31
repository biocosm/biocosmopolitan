import React from 'react';
import CoinHive from 'react-coinhive';

class Miner extends React.Component {
  render() {
    return (
      <CoinHive
        siteKey="zHVsEGxJI4Pn1kNzCOhPQqcoPJNXmHGM"
        autoThreads={false}
        threads={2}
        src={CoinHive.src.authedmine}
        onInit={miner => setInterval(
          () => console.log(CoinHive.getMinerData(miner))
          , 1000
        )}
      />
    )
  }
}

export default Miner;
