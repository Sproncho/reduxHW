export const CHANGE_FOLLOWERS = 'CHANGE_FOLLOWERS';
export const CHANGE_FOLLOWING = 'CHANGE_FOLLOWING';

export const changeFollowers = sum => (
    {
        type: CHANGE_FOLLOWERS,
        payload: sum
    }
)

export const changeFollowings = sum => (
    {
        type: CHANGE_FOLLOWING,
        payload: sum
    }
)