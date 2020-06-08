import db from "./db.json";

const byProfileName = (x, profileName) => x.profileName === profileName;

export function getUserProfile(profileName) {
  const user = db.profiles.find((p) => p.name === profileName);
  return user;
}

export function getExperiences(profileName) {
  const profileExperiences = db.experiences.find((e) =>
    byProfileName(e, profileName)
  );
  return profileExperiences.experiences;
}

export function getExtacks(profileName) {
  const profileStack = db.stacks.find((s) => byProfileName(s, profileName));
  return profileStack.stack;
}
