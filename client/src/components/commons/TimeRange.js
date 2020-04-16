import React from "react";

class TimeRange extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row" style={{ marginTop: 10 }}>
        <div className="col s2" />

        <div className="col s8">
          <div className="row">
            <div className="col s4">
              <p style={{ textAlign: "left" }}>Year range:</p>
            </div>
            <div className="col s1">
              <p style={{ textAlign: "right" }}>From </p>
            </div>
            <div className="col s3">{this.props.renderFromDropDown}</div>

            <div className="col s1">
              <p style={{ textAlign: "right" }}>To </p>
            </div>
            <div className="col s3">{this.props.renderToDropDown}</div>
          </div>
        </div>
        {this.props.renderButtonSearch}
      </div>
    );
  }
}

// function TimeRange(props) {
//   return (
//     <div className="row" style={{ marginTop: 10 }}>
//       <div className="col s2" />

//       <div className="col s8">
//         <div className="row">
//           <div className="col s4">
//             <p style={{ textAlign: "left" }}>Year range:</p>
//           </div>
//           <div className="col s1">
//             <p style={{ textAlign: "right" }}>From </p>
//           </div>
//           <div className="col s3">{props.renderFromDropDown}</div>

//           <div className="col s1">
//             <p style={{ textAlign: "right" }}>To </p>
//           </div>
//           <div className="col s3">{props.renderToDropDown}</div>
//         </div>
//       </div>
//       {props.renderButtonSearch}
//     </div>
//   );
// }

export default TimeRange;
