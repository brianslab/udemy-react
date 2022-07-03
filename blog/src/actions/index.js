import _ from 'lodash';

import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  // when calling action creator within another, need to manually dispatch it
  await dispatch(fetchPosts());

  const userIDs = _.uniq(_.map(getState().posts, 'userId'));
  userIDs.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
