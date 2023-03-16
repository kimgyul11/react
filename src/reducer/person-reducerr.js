export default function personReducer(person, action) {
  //person과 action을 받아온다.  해당하는 액션을 수행한다.
  switch (action.type) {
    case "updated": {
      const { prevName, currentName } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) => {
          if (mentor.name === prevName) {
            return { ...mentor, name: currentName };
          }
          return mentor;
        }),
      };
    }
    case "added": {
      const { addName, addTitle } = action;
      return {
        ...person,
        mentors: [{ name: addName, title: addTitle }, ...person.mentors],
      };
    }
    case "deleted": {
      return {
        ...person,
        mentors: person.mentors.filter(
          (mentor) => mentor.name !== action.mentorName
        ),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입:${action}`);
    }
  }
}
