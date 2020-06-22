import React from 'react';

const MyComponent = props =>{
    return (
        <div>테스트 페이지, {props.name}
        <br/>
        children 값은 {props.children}
        </div>
    );
};

MyComponent.defaultProps = {
    name: '기본'
}

export default MyComponent;
