import React from 'react';
import API from '../API';
import LinkStore from "../stores/LinkStore";

let _getAllState = () => {
    return { links: LinkStore.getAll() };
};

class Main extends React.Component {
    static propTypes = {
        limit: React.PropTypes.number
    };

    static defaultProps = {
        limit: 3
    };

    state = _getAllState();
    
     //removed before added stage-0
    // constructor(props) {
    //     super(props);
    //     //removed before added stage-0
    //     //this.state = _getAllState();
    //     this.onChange = this.onChange.bind(this);
    // }
    
    // componentWillMount() {
    //     debugger;
    // }
    componentDidMount() {
        //debugger;
        
        API.fetchLinks();
        LinkStore.on('change', this.onChange);
    }
    componentWillUnmount() {
        LinkStore.removeListerner('change', this.onChange);
    };

    onChange = () => {
        console.log('4. In the View');

        this.setState(_getAllState);
    };
    
     //removed before added stage-0
    //     onChange() {
    //         console.log('4. In the View');
    // 
    //         this.setState(_getAllState);
    //     }

    render() {
        let content = this.state.links.slice(0, this.props.limit).map(link => {
            return <li key={ link._id }>
            <a href={ link.url }>{ link.title } < /a>
            < /li>
        });
        return (
            <div>
            <h3>Links < /h3>

            < ul >
            { content }
            < /ul>
            < /div>

            );
    }


}

export default Main;
// 
// Main.propTypes = {
//     limit: React.PropTypes.number
// }
// 
// Main.defaultProps = {
//     limit: 2
// }