import React from "react";

const Connected = (props) => {
  return (
    <section className="connected-section">
      <div className="connected-container">
        <h1 className="connected-header">You are Connected to Metamask</h1>
        <p className="connected-account">
          <span>Metamask Account:</span> ( {props.account} )
        </p>
          <div className="connected-vote">
          <input
            type="number"
            placeholder="Entern Candidate Index"
            value={props.number}
            onChange={props.handleNumberChange}
          ></input>
          <br />
          <button className="login-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>      
        <table id="myTable" className="candidates-table">
          <thead>
            <tr>
              <th>Index</th>
              <th>Candidate name</th>
              <th>Candidate votes</th>
            </tr>
          </thead>
          <tbody>
            {props.candidates.map((candidate, index) => (
              <tr key={index}>
                <td>{candidate.index}</td>
                <td>{candidate.name}</td>
                <td>{candidate.voteCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Connected;
