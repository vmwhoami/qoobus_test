import axios from 'axios';
import {
  GET_DOWNLOADS, ERROR, SET_TIME_RANGE, TIME_DIFFERENCE, SET_ACTIVE_DOWNLOADS,
} from './types';

const setActiveDownloads = (activeDown) => ({
  type: SET_ACTIVE_DOWNLOADS,
  payload: activeDown,
});

const setTimeDifference = (daysDifference) => ({
  type: TIME_DIFFERENCE,
  payload: daysDifference,
});

const setTimeRange = (timeRange) => ({
  type: SET_TIME_RANGE,
  payload: timeRange,
});

const setDownloads = (downloads) => ({
  type: GET_DOWNLOADS,
  payload: downloads,
});

const setError = (error) => ({
  type: ERROR,
  payload: error,
});
const getDowloads = () => async (dispatch) => {
  axios.get('/api/downloads').then((info) => {
    const { data } = info;
    dispatch(setDownloads(data.downloads));
  }).catch((error) => {
    dispatch(setError(error));
  });
};

export {
  getDowloads, setDownloads, setTimeRange, setTimeDifference, setActiveDownloads,
};
