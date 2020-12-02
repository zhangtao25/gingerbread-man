import React,{Component} from "react";

interface ChProps {
  test:any
}

interface ChState {
}

export class Ch extends Component<ChProps, ChState>{
  // test(){
  //   return "1"
  // }
  constructor(props: ChProps) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    this.props.test("1234")
  }

  render() {
    return (
      <div>
        <p>s</p>
      </div>);
  }
}
