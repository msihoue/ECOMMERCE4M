import React, { useState } from 'react';
import './tabs.css';

const Tab = ({ product }) => {
    const { description } = product;

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = index => {
        setToggleState(index);
    };

    return (
        <div className="Tab_container ">
            <div className="bloc-tabs">
                <button
                    className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(1)}>
                    Descriptions
                </button>
                <button
                    className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(2)}>
                    Tab 2
                </button>
                <button
                    className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                    onClick={() => toggleTab(3)}>
                    Tab 3
                </button>
            </div>

            <div className="content-tabs">
                <div
                    className={
                        toggleState === 1
                            ? 'tab_content  active-content'
                            : 'tab_content'
                    }>
                    <h2>Content 1</h2>
                    <hr />
                    <p>{description}</p>
                </div>

                <div
                    className={
                        toggleState === 2
                            ? 'tab_content  active-content'
                            : 'tab_content'
                    }>
                    <h2>Content 2</h2>
                    <hr />
                    <p>web school create tab with react</p>
                </div>

                <div
                    className={
                        toggleState === 3
                            ? 'tab_content  active-content'
                            : 'tab_content'
                    }>
                    <h2>Content 3</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                </div>
            </div>
        </div>
    );
};
export default Tab;
