import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate, useNavigation } from "react-router-dom";

function BackArrow() {
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div className="flex items-center">
      <button onClick={() => navigate("/")} className="p-2 ">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="ml-4  h-4 w-4 text-gray-700"
        />
      </button>
    </div>
  );
}

export default BackArrow;
