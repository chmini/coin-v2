import Cost from "../models/Cost";

const showDate = (strDate) => {
  const day = ["일", "월", "화", "수", "목", "금", "토"];
  const date = new Date(strDate);
  return `${date.getMonth() + 1}월 ${date.getDate()}일 ${
    day[date.getDay()]
  }요일`;
};

export const home = (req, res) => {
  res.render("home");
};

export const add = (req, res) => {
  const {
    query: { date },
  } = req;
  const strDate = showDate(date);
  res.render("add", { strDate, date });
};

export const calendar = async (req, res) => {
  const costs = await Cost.find({});
  res.render("calendar", { costs });
};

export const daily = (req, res) => {
  res.render("daily");
};

export const weekly = (req, res) => {
  res.render("weekly");
};

export const monthly = (req, res) => {
  res.render("monthly");
};

// API
export const getData = async (req, res) => {
  const costs = await Cost.find({});
  res.json(costs);
};