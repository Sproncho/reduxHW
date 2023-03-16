import React from 'react';
import Avatar from "./Avatar";
import {useDispatch, useSelector} from "react-redux";
import {changeFollowers, changeFollowings} from "../actions/statsAction";

const UserStats = () => {
    const {name} = useSelector(state => state.user);
    const {followers, following} = useSelector(state => state.stats);
    const dispatch = useDispatch();

    return (
        <div className='user-stats'>
            <div>
                <Avatar/>
                {name}
            </div>
            <div className='stats'>
                <div
                    onClick={() => dispatch(changeFollowers(1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeFollowers(-1));
                    }}
                >Followers {followers}
                </div>
                <div
                    onClick={() => dispatch(changeFollowings(1))}
                    onContextMenu={e => {
                        e.preventDefault();
                        dispatch(changeFollowings(-1));
                    }}
                >Following {following}
                </div>
            </div>
        </div>
    );
};

export default UserStats;