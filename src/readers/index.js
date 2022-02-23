export const getFullName = (profile) => {
  return `${profile.getIn(["firstname"], "")} ${profile.getIn(
    ["lastname"],
    ""
  )}`;
};
