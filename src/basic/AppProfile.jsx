import "./App.css";
import Avatar from "./components/Avatar";
import Profile from "./components/Profile";

function AppProfile() {
  const onClickHandler = (e) => {
    console.log(e);
    alert("버튼클릭!");
  };
  return (
    <>
      <button onClick={onClickHandler}>버튼</button>
      <form>
        <input></input>
      </form>
      <Avatar
        image="https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb861f604e7b0e6900f9ac53a43965300eb9a"
        isNew={true}
      />
      <Profile
        image="https://item.kakaocdn.net/do/d84248170c2c52303db27306a00fb861f604e7b0e6900f9ac53a43965300eb9a"
        name="kimgiyul"
        title="프론트엔트 개발자"
        isNew={true}
      />
      <Profile
        image="https://item.kakaocdn.net/do/a1866850b14ae47d0a2fd61f409dfc057154249a3890514a43687a85e6b6cc82"
        name="Jamse Park"
        title="백엔드 개발자"
      />
      <Profile
        image="https://shop2.daumcdn.net/thumb/R500x500/?fname=http%3A%2F%2Fshop2.daumcdn.net%2Fshophow%2Fp%2FC5114397645.jpg%3Fut%3D20220817224816"
        name="Horang"
        title="풀스택 개발자"
      />
    </>
  );
}

export default AppProfile;
