import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";
import server from "../config.json";
import { Country, State, City } from "country-state-city";
import { useRouter } from "next/router";

const CareerForm = ({ subject }) => {
  const [yourState, setState] = useState(null);
  const [yourCity, setCity] = useState(null);
  const [file, setFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [fileErrors, setFileErrors] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [formVisible, setFormVisible] = useState(true);
  const [selectCountry, SetSelectCountry] = useState("IN");
  const [selectState, SetSelectState] = useState("KA");
  const [hideSubmitButton, setHideSubmitButton] = useState(true);
  const [selectedVessel, setSelectedVessel] = useState("");
  const [positions, setPositions] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState("");
  const [newposition, setPosition] = useState("");
  const [newPositionName, setNewPositionName] = useState("");
  const [newPositions, setNewPositions] = useState([]); // State for new positions based on selected position
  const [isNewPositionDisabled, setIsNewPositionDisabled] = useState(true); // State to disable new position
  const router = useRouter();
  const { utm_source, utm_medium, utm_campaign, utm_id } = router.query;
  const query = router.query;

  const vessel = [
    {
      id: "1",
      vessel_name: "LPG Tanker",
    },
    {
      id: "2",
      vessel_name: "Passenger Vessel",
    },
    {
      id: "3",
      vessel_name: "Mini Bulk Carrier",
    },
    {
      id: "4",
      vessel_name: "Crude Oil Tanker",
    },
    // {
    //   id: "5",
    //   vessel_name: "Panamax Bulk Container",
    // },
    {
      id: "6",
      vessel_name: "Ethylene Carrier",
    },
    {
      id: "7",
      vessel_name: "General Bulk Carrier",
    },
    {
      id: "8",
      vessel_name: "Container Vessel",
    },
  ];

  // console.log(vessel)

  const position = [];

  const [formData, setFormData] = useState({
    firstname: "",
    contactNo: "",
    email: "",
    state: "",
    city: "",
    vessel: "",
    position: "",
    newPositionName: "",
    indosNo: "",
    resume: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
  });

  const handleStateChange = (event) => {
    // Call the parent component's onChange function with the selected value
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    // Get the label (text) of the selected option
    const selectedLabel = selectedOption.text;
    //alert(selectedValue);
    SetSelectState(selectedValue);
    setState(selectedLabel);
    //console.log(selectedLabel)
  };

  const handleCityChange = (event) => {
    // Call the parent component's onChange function with the selected value
    const selectedValue = event.target.value;
    const selectedOption = event.target.options[event.target.selectedIndex];
    // Get the label (text) of the selected option
    const selectedLabel = selectedOption.text;
    // alert(selectedValue);
    // SetSelectState(selectedValue)
    setCity(selectedLabel);
    //console.log(selectedLabel)
  };

  const handleVesselChange = (e) => {
    const vesselId = e.target.value;
    const selectedOption = e.target.options[e.target.selectedIndex].text;
    setSelectedVessel(selectedOption);
    // Retrieve positions based on vesselId
    switch (vesselId) {
      case "1":
        setPositions([
          { id: "101", name: "Gas Engineer" },
          { id: "102", name: "Captain (Master)" },
          { id: "103", name: "Chief Officer (Chief Mate)" },
          { id: "104", name: "Second Officer (Second Mate)" },
          { id: "105", name: "Third Officer (Third Mate)" },
          { id: "106", name: "Junior Officer" },
          { id: "107", name: "Deck Cadet" },
          { id: "108", name: "Chief Engineer" },
          { id: "109", name: "Second Engineer" },
          { id: "110", name: "Third Engineer" },
          { id: "111", name: "Fourth Engineer" },
          { id: "112", name: "TME" },
          { id: "113", name: "Electrical Officer (EO)" },
          { id: "114", name: "Electo-Technical Officer " },
          { id: "115", name: "Bosun" },
          { id: "116", name: "Able Seaman(AB)" },
          { id: "117", name: "Ordinary Seaman(OS)" },
          { id: "118", name: "Trainee OS" },
          { id: "119", name: "Fitter" },
          { id: "120", name: "Motorman/Oiler" },
          { id: "121", name: "Wiper" },
          { id: "122", name: "Pumpman" },
          { id: "123", name: "Chief Cook" },
          { id: "124", name: "Second Cook" },
          { id: "125", name: "Trainee Cook" },
          { id: "126", name: "General Steward" },
          { id: "127", name: "Steward" },
          { id: "128", name: "Welder" },
          { id: "129", name: "Messman" },
        ]);
        setPosition("");
        break;
      case "2":
        setPositions([
          { id: "130", name: "Captain (Master)" },
          { id: "131", name: "Chief Officer (Chief Mate)" },
          { id: "132", name: "Second Officer (Second Mate)" },
          { id: "133", name: "Third Officer (Third Mate)" },
          { id: "134", name: "Junior Officer" },
          { id: "135", name: "Deck Cadet" },
          { id: "136", name: "Chief Engineer" },
          { id: "137", name: "Second Engineer" },
          { id: "138", name: "Third Engineer" },
          { id: "139", name: "Fourth Engineer" },
          { id: "140", name: "TME" },
          { id: "141", name: "Electrical Officer (EO)" },
          { id: "142", name: "Electo-Technical Officer " },
          { id: "143", name: "Bosun" },
          { id: "144", name: "Able Seaman(AB)" },
          { id: "145", name: "Ordinary Seaman(OS)" },
          { id: "146", name: "Trainee OS" },
          { id: "147", name: "Fitter" },
          { id: "148", name: "Motorman/Oiler" },
          { id: "149", name: "Wiper" },
          { id: "150", name: "Pumpman" },
          { id: "151", name: "Chief Cook" },
          { id: "152", name: "Second Cook" },
          { id: "153", name: "Trainee Cook" },
          { id: "154", name: "General Steward" },
          { id: "155", name: "Steward" },
          { id: "156", name: "Welder" },
          { id: "157", name: "Messman" },
        ]);
        setPosition("");
        break;
      case "3":
        setPositions([
          { id: "158", name: "NCV Master" },
          { id: "159", name: "NCV Mate (Chief Officer)" },
          { id: "160", name: "NCV Second Mate" },
          { id: "161", name: "NCV Third Mate" },
          { id: "162", name: "Junior Officer" },
          { id: "163", name: "NCV Chief Engineer" },
          { id: "164", name: "NCV Second Engineer" },
          { id: "165", name: "NCV Third Engineer" },
          { id: "166", name: "NCV Fourth Engineer" },
        ]);
        setPosition("");
        break;
      case "4":
        setPositions([
          { id: "167", name: "Captain (Master)" },
          { id: "168", name: "Chief Officer (Chief Mate)" },
          { id: "169", name: "Second Officer (Second Mate)" },
          { id: "170", name: "Third Officer (Third Mate)" },
          { id: "171", name: "Junior Officer" },
          { id: "172", name: "Deck Cadet" },
          { id: "173", name: "Chief Engineer" },
          { id: "174", name: "Second Engineer" },
          { id: "175", name: "Third Engineer" },
          { id: "176", name: "Fourth Engineer" },
          { id: "177", name: "TME" },
          { id: "178", name: "Electrical Officer (EO)" },
          { id: "179", name: "Electo-Technical Officer " },
          { id: "180", name: "Bosun" },
          { id: "181", name: "Able Seaman(AB)" },
          { id: "182", name: "Ordinary Seaman(OS)" },
          { id: "183", name: "Trainee OS" },
          { id: "184", name: "Fitter" },
          { id: "185", name: "Motorman/Oiler" },
          { id: "186", name: "Wiper" },
          { id: "187", name: "Pumpman" },
          { id: "188", name: "Chief Cook" },
          { id: "189", name: "Second Cook" },
          { id: "190", name: "Trainee Cook" },
          { id: "191", name: "General Steward" },
          { id: "192", name: "Steward" },
          { id: "193", name: "Welder" },
          { id: "194", name: "Messman" },
        ]);
        setPosition("");
        break;

      // case "5":
      //   setPositions([
      //     { id: "", name: "" },
      //   ]);
      //   setPosition("");
      //   break;

      case "6":
        setPositions([
          { id: "195", name: "Captain (Master)" },
          { id: "196", name: "Chief Officer (Chief Mate)" },
          { id: "197", name: "Second Officer (Second Mate)" },
          { id: "198", name: "Third Officer (Third Mate)" },
          { id: "199", name: "Junior Officer" },
          { id: "200", name: "Deck Cadet" },
          { id: "201", name: "Chief Engineer" },
          { id: "202", name: "Second Engineer" },
          { id: "203", name: "Third Engineer" },
          { id: "204", name: "Fourth Engineer" },
          { id: "205", name: "TME" },
          { id: "206", name: "Electrical Officer (EO)" },
          { id: "207", name: "Electo-Technical Officer " },
          { id: "208", name: "Bosun" },
          { id: "209", name: "Able Seaman(AB)" },
          { id: "210", name: "Ordinary Seaman(OS)" },
          { id: "211", name: "Trainee OS" },
          { id: "212", name: "Fitter" },
          { id: "213", name: "Motorman/Oiler" },
          { id: "214", name: "Wiper" },
          { id: "215", name: "Pumpman" },
          { id: "216", name: "Chief Cook" },
          { id: "217", name: "Second Cook" },
          { id: "218", name: "Trainee Cook" },
          { id: "219", name: "General Steward" },
          { id: "220", name: "Steward" },
          { id: "221", name: "Welder" },
          { id: "222", name: "Messman" },
        ]);
        setPosition("");
        break;
      case "7":
        setPositions([
          { id: "223", name: "Captain (Master)" },
          { id: "224", name: "Chief Officer (Chief Mate)" },
          { id: "225", name: "Second Officer (Second Mate)" },
          { id: "226", name: "Third Officer (Third Mate)" },
          { id: "227", name: "Junior Officer" },
          { id: "228", name: "Deck Cadet" },
          { id: "229", name: "Chief Engineer" },
          { id: "230", name: "Second Engineer" },
          { id: "231", name: "Third Engineer" },
          { id: "232", name: "Fourth Engineer" },
          { id: "233", name: "TME" },
          { id: "234", name: "Electrical Officer (EO)" },
          { id: "235", name: "Electo-Technical Officer" },
          { id: "236", name: "Bosun" },
          { id: "237", name: "Able Seaman(AB)" },
          { id: "238", name: "Ordinary Seaman(OS)" },
          { id: "239", name: "Trainee OS" },
          { id: "240", name: "Fitter" },
          { id: "241", name: "Motorman/Oiler" },
          { id: "242", name: "Wiper" },
          { id: "243", name: "Pumpman" },
          { id: "244", name: "Chief Cook" },
          { id: "245", name: "Second Cook" },
          { id: "246", name: "Trainee Cook" },
          { id: "247", name: "General Steward" },
          { id: "248", name: "Steward" },
          { id: "249", name: "Welder" },
          { id: "250", name: "Messman" },
        ]);
        setPosition("");
        break;

      case "8":
        setPositions([
          { id: "251", name: "Captain (Master)" },
          { id: "252", name: "Chief Officer (Chief Mate)" },
          { id: "253", name: "Second Officer (Second Mate)" },
          { id: "254", name: "Third Officer (Third Mate)" },
          { id: "255", name: "Junior Officer" },
          { id: "256", name: "Deck Cadet" },
          { id: "257", name: "Chief Engineer" },
          { id: "258", name: "Second Engineer" },
          { id: "259", name: "Third Engineer" },
          { id: "260", name: "Fourth Engineer" },
          { id: "261", name: "TME" },
          { id: "262", name: "Electrical Officer (EO)" },
          { id: "263", name: "Electo-Technical Officer " },
          { id: "264", name: "Bosun" },
          { id: "265", name: "Able Seaman(AB)" },
          { id: "266", name: "Ordinary Seaman(OS)" },
          { id: "267", name: "Trainee OS" },
          { id: "268", name: "Fitter" },
          { id: "269", name: "Motorman/Oiler" },
          { id: "270", name: "Wiper" },
          { id: "271", name: "Pumpman" },
          { id: "272", name: "Chief Cook" },
          { id: "273", name: "Second Cook" },
          { id: "274", name: "Trainee Cook" },
          { id: "275", name: "General Steward" },
          { id: "276", name: "Steward" },
          { id: "277", name: "Welder" },
          { id: "278", name: "Messman" },
        ]);
        setPosition("");
        break;

      case "9":
        setPositions([
          { id: "279", name: "Captain (Master)" },
          { id: "280", name: "Chief Officer (Chief Mate)" },
          { id: "281", name: "Second Officer (Second Mate)" },
          { id: "282", name: "Third Officer (Third Mate)" },
          { id: "283", name: "Junior Officer" },
          { id: "284", name: "Deck Cadet" },
          { id: "285", name: "Chief Engineer" },
          { id: "286", name: "Second Engineer" },
          { id: "287", name: "Third Engineer" },
          { id: "288", name: "Fourth Engineer" },
          { id: "289", name: "TME" },
          { id: "290", name: "Electrical Officer (EO)" },
          { id: "291", name: "Electo-Technical Officer" },
          { id: "292", name: "Bosun" },
          { id: "293", name: "Able Seaman(AB)" },
          { id: "294", name: "Ordinary Seaman(OS)" },
          { id: "295", name: "Trainee OS" },
          { id: "296", name: "Fitter" },
          { id: "297", name: "Motorman/Oiler" },
          { id: "298", name: "Wiper" },
          { id: "299", name: "Pumpman" },
          { id: "300", name: "Chief Cook" },
          { id: "301", name: "Second Cook" },
          { id: "302", name: "Trainee Cook" },
          { id: "303", name: "General Steward" },
          { id: "304", name: "Steward" },
          { id: "305", name: "Welder" },
          { id: "306", name: "Messman" },
        ]);

      // Add more cases as needed
      default:
        setPositions([]);
    }
    setSelectedPosition("");
    setNewPositions([]);
    setIsNewPositionDisabled(true);
  };

  const handlePositionChange = (e) => {
    const positionId = e.target.value;

    const selectedOption = e.target.options[e.target.selectedIndex];
    // Fetch the data attribute value
    const positionName = selectedOption.getAttribute("data");

    console.log("this is the second position", positionName);
    setSelectedPosition(positionName);
    setIsNewPositionDisabled(positionId === "");
    // Set new positions based on the position
    switch (positionId) {
      //  case "1":
      case "101":
        setNewPositions([{ id: "201", name: "Gas Engineer" }]);
        break;
      case "102":
        setNewPositions([{ id: "202", name: "Captain (Master)" }]);
        break;
      case "103":
        setNewPositions([
          { id: "203", name: "Captain (Master)" },
          { id: "204", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "104":
        setNewPositions([
          { id: "205", name: "Chief Officer (Chief Mate)" },
          { id: "206", name: "Second Officer (Second Mate)" },
        ]);
        break;
      case "105":
        setNewPositions([
          { id: "207", name: "Second Officer (Second Mate)" },
          { id: "208", name: "Third Officer (Third Mate)" },
        ]);
        break;
      case "106":
        setNewPositions([
          { id: "209", name: "Third Officer (Third Mate)" },
          { id: "210", name: "Junior Officer" },
        ]);
        break;
      case "107":
        setNewPositions([
          { id: "211", name: "Junior Officer" },
          { id: "212", name: "Deck Cadet" },
        ]);
        break;
      case "108":
        setNewPositions([
          // { id: "213", name: "Captain (Master)" },
          { id: "214", name: "Chief Engineer" },
        ]);
        break;
      case "109":
        setNewPositions([
          { id: "215", name: "Chief Engineer" },
          { id: "216", name: "Second Engineer" },
        ]);
        break;
      case "110":
        setNewPositions([
          { id: "217", name: "Second Engineer" },
          { id: "218", name: "Third Engineer" },
        ]);
        break;
      case "111":
        setNewPositions([
          { id: "219", name: "Third Engineer" },
          { id: "220", name: "Fourth Engineer" },
        ]);
        break;
      case "112":
        setNewPositions([
          { id: "221", name: "TME" },
          { id: "534", name: "Fourth Engineer" },
        ]);
        break;
      case "113":
        setNewPositions([
          { id: "222", name: "Electro-Technical Officer " },
          { id: "223", name: "Electrical Officer (EO)" },
        ]);
        break;
      case "114":
        setNewPositions([
          { id: "224", name: "Electrical Officer (EO)" },
          { id: "225", name: "Electro-Technical Officer" },
        ]);
        break;
      case "115":
        setNewPositions([{ id: "226", name: "Bosun" }]);
        break;
      case "116":
        setNewPositions([
          { id: "227", name: "Bosun" },
          { id: "228", name: "Able Seaman (AB)" },
        ]);
        break;
      case "117":
        setNewPositions([
          { id: "229", name: "Able Seaman (AB)" },
          { id: "230", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "118":
        setNewPositions([
          { id: "231", name: "Ordinary Seaman (OS)" },
          { id: "232", name: "Trainee OS" },
        ]);
        break;
      case "119":
        setNewPositions([{ id: "233", name: "Fitter" }]);
        break;
      case "120":
        setNewPositions([{ id: "234", name: "Motorman/Oiler" }]);
        break;
      case "121":
        setNewPositions([{ id: "235", name: "Wiper" }]);
        break;
      case "122":
        setNewPositions([{ id: "236", name: "Pumpman" }]);
        break;
      case "123":
        setNewPositions([{ id: "237", name: "Second Cook" }]);
        break;
      case "124":
        setNewPositions([
          { id: "238", name: "Chief Cook" },
          { id: "239", name: "Second Cook" },
        ]);
        break;
      case "125":
        setNewPositions([
          { id: "240", name: "Second Cook" },
          { id: "241", name: "Trainee Cook" },
        ]);
        break;
      case "126":
        setNewPositions([{ id: "242", name: "General Steward" }]);
        break;
      case "127":
        setNewPositions([
          { id: "243", name: "Ordinary Seaman (OS)" },
          { id: "244", name: "Steward" },
        ]);
        break;
      case "128":
        setNewPositions([{ id: "245", name: "Welder" }]);
        break;
      case "129":
        setNewPositions([{ id: "246", name: "Messman" }]);
        break;
      default:
        setNewPositions([]);
        break;

      //  case "2":

      case "130":
        setNewPositions([{ id: "247", name: "Captain (Master)" }]);
        break;
      case "131":
        setNewPositions([
          { id: "248", name: "Captain (Master)" },
          { id: "249", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "132":
        setNewPositions([
          { id: "250", name: "Chief Officer (Chief Mate)" },
          { id: "251", name: "Second Officer (Second Mate)" },
        ]);
        break;
      case "133":
        setNewPositions([
          { id: "252", name: "Second Officer (Second Mate)" },
          { id: "253", name: "Third Officer (Third Mate)" },
        ]);
        break;
      case "134":
        setNewPositions([
          { id: "254", name: "Third Officer (Third Mate)" },
          { id: "255", name: "Junior Officer" },
        ]);
        break;
      case "135":
        setNewPositions([
          { id: "256", name: "Junior Officer" },
          { id: "257", name: "Deck Cadet" },
        ]);
        break;
      case "136":
        setNewPositions([
          // { id: "258", name: "Captain (Master)" },
          { id: "259", name: "Chief Engineer" },
        ]);
        break;
      case "137":
        setNewPositions([
          { id: "260", name: "Chief Engineer" },
          { id: "261", name: "Second Engineer" },
        ]);
        break;
      case "138":
        setNewPositions([
          { id: "262", name: "Second Engineer" },
          { id: "263", name: "Third Engineer" },
        ]);
        break;
      case "139":
        setNewPositions([
          { id: "264", name: "Third Engineer" },
          { id: "265", name: "Fourth Engineer" },
        ]);
        break;
      case "140":
        setNewPositions([
          { id: "266", name: "TME" },
          { id: "535", name: "Fourth Engineer" },
        ]);
        break;
      case "141":
        setNewPositions([
          { id: "267", name: "Electro-Technical Officer" },
          { id: "268", name: "Electrical Officer (EO)" },
        ]);
        break;
      case "142":
        setNewPositions([
          { id: "269", name: "Electrical Officer (EO)" },
          { id: "270", name: "Electro-Technical Officer" },
        ]);
        break;
      case "143":
        setNewPositions([{ id: "271", name: "Bosun" }]);
        break;
      case "144":
        setNewPositions([
          { id: "272", name: "Bosun" },
          { id: "273", name: "Able Seaman (AB)" },
        ]);
        break;
      case "145":
        setNewPositions([
          { id: "274", name: "Able Seaman (AB)" },
          { id: "275", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "146":
        setNewPositions([
          { id: "276", name: "Ordinary Seaman (OS)" },
          { id: "277", name: "Trainee OS" },
        ]);
        break;
      case "147":
        setNewPositions([{ id: "278", name: "Fitter" }]);
        break;
      case "148":
        setNewPositions([{ id: "279", name: "Motorman/Oiler" }]);
        break;
      case "149":
        setNewPositions([{ id: "280", name: "Wiper" }]);
        break;
      case "150":
        setNewPositions([{ id: "281", name: "Pumpman" }]);
        break;
      case "151":
        setNewPositions([{ id: "282", name: "Second Cook" }]);
        break;
      case "152":
        setNewPositions([
          { id: "283", name: "Chief Cook" },
          { id: "284", name: "Second Cook" },
        ]);
        break;
      case "153":
        setNewPositions([
          { id: "285", name: "Second Cook" },
          { id: "286", name: "Trainee Cook" },
        ]);
        break;
      case "154":
        setNewPositions([{ id: "287", name: "General Steward" }]);
        break;
      case "155":
        setNewPositions([
          { id: "288", name: "Ordinary Seaman (OS)" },
          { id: "289", name: "Steward" },
        ]);
        break;
      case "156":
        setNewPositions([{ id: "290", name: "Welder" }]);
        break;
      case "157":
        setNewPositions([{ id: "291", name: "Messman" }]);
        break;

      // case "3":
      case "158":
        setNewPositions([{ id: "292", name: "NCV Master" }]);
        break;
      case "159":
        setNewPositions([
          { id: "293", name: "NCV Master" },
          { id: "294", name: "NCV Mate (Chief Officer)" },
        ]);
        break;
      case "160":
        setNewPositions([
          { id: "295", name: "NCV Mate (Chief Officer)" },
          { id: "296", name: "NCV Second Mate" },
        ]);
        break;
      case "161":
        setNewPositions([
          { id: "297", name: "NCV Second Mate" },
          { id: "298", name: "NCV Third Mate" },
        ]);
        break;
      case "162":
        setNewPositions([
          { id: "299", name: "NCV Third Mate" },
          { id: "300", name: "Junior Officer" },
        ]);
        break;
      case "163":
        setNewPositions([
          { id: "301", name: "NCV Mate" },
          { id: "302", name: "NCV Chief Engineer" },
        ]);
        break;
      case "164":
        setNewPositions([
          { id: "303", name: "NCV Chief Engineer" },
          { id: "304", name: "NCV Second Engineer" },
        ]);
        break;
      case "165":
        setNewPositions([
          { id: "305", name: "NCV Second Engineer" },
          { id: "306", name: "NCV Third Engineer" },
        ]);
        break;
      case "166":
        setNewPositions([
          { id: "307", name: "NCV Third Engineer" },
          { id: "308", name: "NCV Fourth Engineer" },
        ]);
        break;

      // case "4":

      case "167":
        setNewPositions([{ id: "309", name: "Captain (Master)" }]);
        break;
      case "168":
        setNewPositions([
          { id: "310", name: "Captain (Master)" },
          { id: "311", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "169":
        setNewPositions([
          { id: "312", name: "Chief Officer (Chief Mate)" },
          { id: "313", name: "Second Officer (Second Mate)" },
        ]);
        break;
      case "170":
        setNewPositions([
          { id: "314", name: "Second Officer (Second Mate)" },
          { id: "315", name: "Third Officer (Third Mate)" },
        ]);
        break;
      case "171":
        setNewPositions([
          { id: "316", name: "Third Officer (Third Mate)" },
          { id: "317", name: "Junior Officer" },
        ]);
        break;
      case "172":
        setNewPositions([
          { id: "318", name: "Junior Officer" },
          { id: "319", name: "Deck Cadet" },
        ]);
        break;
      case "173":
        setNewPositions([
          // { id: "320", name: "Captain (Master)" },
          { id: "321", name: "Chief Engineer" },
        ]);
        break;
      case "174":
        setNewPositions([
          { id: "322", name: "Chief Engineer" },
          { id: "323", name: "Second Engineer" },
        ]);
        break;
      case "175":
        setNewPositions([
          { id: "324", name: "Second Engineer" },
          { id: "325", name: "Third Engineer" },
        ]);
        break;
      case "176":
        setNewPositions([
          { id: "326", name: "Third Engineer" },
          { id: "327", name: "Fourth Engineer" },
        ]);
        break;
      case "177":
        setNewPositions([
          { id: "328", name: "TME" },
          { id: "536", name: "Fourth Engineer" },
        ]);
        break;
      case "178":
        setNewPositions([
          { id: "329", name: "Electro-Technical Officer" },
          { id: "330", name: "Electrical Officer (EO)" },
        ]);
        break;
      case "179":
        setNewPositions([
          { id: "331", name: "Electrical Officer (EO)" },
          { id: "332", name: "Electro-Technical Officer" },
        ]);
        break;
      case "180":
        setNewPositions([{ id: "333", name: "Bosun" }]);
        break;
      case "181":
        setNewPositions([
          { id: "334", name: "Bosun" },
          { id: "335", name: "Able Seaman (AB)" },
        ]);
        break;
      case "182":
        setNewPositions([
          { id: "336", name: "Able Seaman (AB)" },
          { id: "337", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "183":
        setNewPositions([
          { id: "338", name: "Ordinary Seaman (OS)" },
          { id: "339", name: "Trainee OS" },
        ]);
        break;
      case "184":
        setNewPositions([{ id: "340", name: "Fitter" }]);
        break;
      case "185":
        setNewPositions([{ id: "341", name: "Motorman/Oiler" }]);
        break;
      case "186":
        setNewPositions([{ id: "342", name: "Wiper" }]);
        break;
      case "187":
        setNewPositions([{ id: "343", name: "Pumpman" }]);
        break;
      case "188":
        setNewPositions([{ id: "344", name: "Second Cook" }]);
        break;
      case "189":
        setNewPositions([
          { id: "345", name: "Chief Cook" },
          { id: "346", name: "Second Cook" },
        ]);
        break;
      case "190":
        setNewPositions([
          { id: "347", name: "Second Cook" },
          { id: "348", name: "Trainee Cook" },
        ]);
        break;
      case "191":
        setNewPositions([{ id: "349", name: "General Steward" }]);
        break;
      case "192":
        setNewPositions([
          { id: "350", name: "Ordinary Seaman (OS)" },
          { id: "351", name: "Steward" },
        ]);
        break;
      case "193":
        setNewPositions([{ id: "352", name: "Welder" }]);
        break;
      case "194":
        setNewPositions([{ id: "353", name: "Messman" }]);
        break;

      // case "5":

      case "195":
        setNewPositions([{ id: "354", name: "Captain (Master)" }]);
        break;
      case "196":
        setNewPositions([
          { id: "355", name: "Captain (Master)" },
          { id: "356", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "197":
        setNewPositions([
          { id: "357", name: "Chief Officer (Chief Mate)" },
          { id: "358", name: "Second Officer (Second Mate)" },
        ]);
        break;
      case "198":
        setNewPositions([
          { id: "359", name: "Second Officer (Second Mate)" },
          { id: "360", name: "Third Officer (Third Mate)" },
        ]);
        break;
      case "199":
        setNewPositions([
          { id: "361", name: "Third Officer (Third Mate)" },
          { id: "362", name: "Junior Officer" },
        ]);
        break;
      case "200":
        setNewPositions([
          { id: "363", name: "Junior Officer" },
          { id: "364", name: "Deck Cadet" },
        ]);
        break;
      case "201":
        setNewPositions([
          // { id: "365", name: "Captain (Master)" },
          { id: "366", name: "Chief Engineer" },
        ]);
        break;
      case "202":
        setNewPositions([
          { id: "367", name: "Chief Engineer" },
          { id: "368", name: "Second Engineer" },
        ]);
        break;
      case "203":
        setNewPositions([
          { id: "369", name: "Second Engineer" },
          { id: "370", name: "Third Engineer" },
        ]);
        break;
      case "204":
        setNewPositions([
          { id: "371", name: "Third Engineer" },
          { id: "372", name: "Fourth Engineer" },
        ]);
        break;
      case "205":
        setNewPositions([
          { id: "373", name: "TME" },
          { id: "537", name: "Fourth Engineer" },
        ]);
        break;
      case "206":
        setNewPositions([
          { id: "374", name: "Electro-Technical Officer" },
          { id: "375", name: "Electrical Officer (EO)" },
        ]);
        break;
      case "207":
        setNewPositions([
          { id: "376", name: "Electrical Officer (EO)" },
          { id: "377", name: "Electro-Technical Officer" },
        ]);
        break;
      case "208":
        setNewPositions([{ id: "378", name: "Bosun" }]);
        break;
      case "209":
        setNewPositions([
          { id: "379", name: "Bosun" },
          { id: "380", name: "Able Seaman (AB)" },
        ]);
        break;
      case "210":
        setNewPositions([
          { id: "381", name: "Able Seaman (AB)" },
          { id: "382", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "211":
        setNewPositions([
          { id: "383", name: "Ordinary Seaman (OS)" },
          { id: "384", name: "Trainee OS" },
        ]);
        break;
      case "212":
        setNewPositions([{ id: "385", name: "Fitter" }]);
        break;
      case "213":
        setNewPositions([{ id: "386", name: "Motorman/Oiler" }]);
        break;
      case "214":
        setNewPositions([{ id: "387", name: "Wiper" }]);
        break;
      case "215":
        setNewPositions([{ id: "388", name: "Pumpman" }]);
        break;
      case "216":
        setNewPositions([{ id: "389", name: "Second Cook" }]);
        break;
      case "217":
        setNewPositions([
          { id: "390", name: "Chief Cook" },
          { id: "391", name: "Second Cook" },
        ]);
        break;
      case "218":
        setNewPositions([
          { id: "392", name: "Second Cook" },
          { id: "393", name: "Trainee Cook" },
        ]);
        break;
      case "219":
        setNewPositions([{ id: "394", name: "General Steward" }]);
        break;
      case "220":
        setNewPositions([
          { id: "395", name: "Ordinary Seaman (OS)" },
          { id: "396", name: "Steward" },
        ]);
        break;
      case "221":
        setNewPositions([{ id: "397", name: "Welder" }]);
        break;
      case "222":
        setNewPositions([{ id: "398", name: "Messman" }]);
        break;

      //case "6"

      case "223":
        setNewPositions([{ id: "399", name: "Captain (Master)" }]);
        break;
      case "224":
        setNewPositions([
          { id: "400", name: "Captain (Master)" },
          { id: "401", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "225":
        setNewPositions([
          { id: "402", name: "Chief Officer (Chief Mate)" },
          { id: "403", name: "Second Officer (Second Mate)" },
        ]);
        break;
      case "226":
        setNewPositions([
          { id: "404", name: "Second Officer (Second Mate)" },
          { id: "405", name: "Third Officer (Third Mate)" },
        ]);
        break;
      case "227":
        setNewPositions([
          { id: "406", name: "Third Officer (Third Mate)" },
          { id: "407", name: "Junior Officer" },
        ]);
        break;
      case "228":
        setNewPositions([
          { id: "408", name: "Junior Officer" },
          { id: "409", name: "Deck Cadet" },
        ]);
        break;
      case "229":
        setNewPositions([
          // { id: "410", name: "Captain (Master)" },
          { id: "411", name: "Chief Engineer" },
        ]);
        break;
      case "230":
        setNewPositions([
          { id: "412", name: "Chief Engineer" },
          { id: "413", name: "Second Engineer" },
        ]);
        break;
      case "231":
        setNewPositions([
          { id: "414", name: "Second Engineer" },
          { id: "415", name: "Third Engineer" },
        ]);
        break;
      case "232":
        setNewPositions([
          { id: "416", name: "Third Engineer" },
          { id: "417", name: "Fourth Engineer" },
        ]);
        break;
      case "233":
        setNewPositions([
          { id: "418", name: "TME" },
          { id: "538", name: "Fourth Engineer" },
        ]);
        break;
      case "234":
        setNewPositions([
          { id: "419", name: "Electro-Technical Officer" },
          { id: "420", name: "Electrical Officer (EO)" },
        ]);
        break;
      case "235":
        setNewPositions([
          { id: "421", name: "Electrical Officer (EO)" },
          { id: "422", name: "Electro-Technical Officer" },
        ]);
        break;
      case "236":
        setNewPositions([{ id: "423", name: "Bosun" }]);
        break;
      case "237":
        setNewPositions([
          { id: "424", name: "Bosun" },
          { id: "425", name: "Able Seaman (AB)" },
        ]);
        break;
      case "238":
        setNewPositions([
          { id: "426", name: "Able Seaman (AB)" },
          { id: "427", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "239":
        setNewPositions([
          { id: "428", name: "Ordinary Seaman (OS)" },
          { id: "429", name: "Trainee OS" },
        ]);
        break;
      case "240":
        setNewPositions([{ id: "430", name: "Fitter" }]);
        break;
      case "241":
        setNewPositions([{ id: "431", name: "Motorman/Oiler" }]);
        break;
      case "242":
        setNewPositions([{ id: "432", name: "Wiper" }]);
        break;
      case "243":
        setNewPositions([{ id: "433", name: "Pumpman" }]);
        break;
      case "244":
        setNewPositions([{ id: "434", name: "Second Cook" }]);
        break;
      case "245":
        setNewPositions([
          { id: "435", name: "Chief Cook" },
          { id: "436", name: "Second Cook" },
        ]);
        break;
      case "246":
        setNewPositions([
          { id: "437", name: "Second Cook" },
          { id: "438", name: "Trainee Cook" },
        ]);
        break;
      case "247":
        setNewPositions([{ id: "439", name: "General Steward" }]);
        break;
      case "248":
        setNewPositions([
          { id: "440", name: "Ordinary Seaman (OS)" },
          { id: "441", name: "Steward" },
        ]);
        break;
      case "249":
        setNewPositions([{ id: "442", name: "Welder" }]);
        break;
      case "250":
        setNewPositions([{ id: "443", name: "Messman" }]);
        break;

      // case "7":

      case "251":
        setNewPositions([{ id: "444", name: "Captain (Master)" }]);
        break;
      case "252":
        setNewPositions([
          { id: "445", name: "Captain (Master)" },
          { id: "446", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "253":
        setNewPositions([
          { id: "447", name: "Chief Officer (Chief Mate)" },
          { id: "448", name: "Second Officer (Second Mate)" },
        ]);
        break;
      case "254":
        setNewPositions([
          { id: "449", name: "Second Officer (Second Mate)" },
          { id: "450", name: "Third Officer (Third Mate)" },
        ]);
        break;
      case "255":
        setNewPositions([
          { id: "451", name: "Third Officer (Third Mate)" },
          { id: "452", name: "Junior Officer" },
        ]);
        break;
      case "256":
        setNewPositions([
          { id: "453", name: "Junior Officer" },
          { id: "454", name: "Deck Cadet" },
        ]);
        break;
      case "257":
        setNewPositions([
          // { id: "455", name: "Captain (Master)" },
          { id: "456", name: "Chief Engineer" },
        ]);
        break;
      case "258":
        setNewPositions([
          { id: "457", name: "Chief Engineer" },
          { id: "458", name: "Second Engineer" },
        ]);
        break;
      case "259":
        setNewPositions([
          { id: "459", name: "Second Engineer" },
          { id: "460", name: "Third Engineer" },
        ]);
        break;
      case "260":
        setNewPositions([
          { id: "461", name: "Third Engineer" },
          { id: "462", name: "Fourth Engineer" },
        ]);
        break;
      case "261":
        setNewPositions([
          { id: "463", name: "TME" },
          { id: "539", name: "Fourth Engineer" },
        ]);
        break;
      case "262":
        setNewPositions([
          { id: "464", name: "Electro-Technical Officer" },
          { id: "465", name: "Electrical Officer (EO)" },
        ]);
        break;
      case "263":
        setNewPositions([
          { id: "466", name: "Electrical Officer (EO)" },
          { id: "467", name: "Electro-Technical Officer" },
        ]);
        break;
      case "264":
        setNewPositions([{ id: "468", name: "Bosun" }]);
        break;
      case "265":
        setNewPositions([
          { id: "469", name: "Bosun" },
          { id: "470", name: "Able Seaman (AB)" },
        ]);
        break;
      case "266":
        setNewPositions([
          { id: "471", name: "Able Seaman (AB)" },
          { id: "472", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "267":
        setNewPositions([
          { id: "473", name: "Ordinary Seaman (OS)" },
          { id: "474", name: "Trainee OS" },
        ]);
        break;
      case "268":
        setNewPositions([{ id: "475", name: "Fitter" }]);
        break;
      case "269":
        setNewPositions([{ id: "476", name: "Motorman/Oiler" }]);
        break;
      case "270":
        setNewPositions([{ id: "477", name: "Wiper" }]);
        break;
      case "271":
        setNewPositions([{ id: "478", name: "Pumpman" }]);
        break;
      case "272":
        setNewPositions([{ id: "479", name: "Second Cook" }]);
        break;
      case "273":
        setNewPositions([
          { id: "480", name: "Chief Cook" },
          { id: "481", name: "Second Cook" },
        ]);
        break;
      case "274":
        setNewPositions([
          { id: "482", name: "Second Cook" },
          { id: "483", name: "Trainee Cook" },
        ]);
        break;
      case "275":
        setNewPositions([{ id: "484", name: "General Steward" }]);
        break;
      case "276":
        setNewPositions([
          { id: "485", name: "Ordinary Seaman (OS)" },
          { id: "486", name: "Steward" },
        ]);
        break;
      case "277":
        setNewPositions([{ id: "487", name: "Welder" }]);
        break;
      case "278":
        setNewPositions([{ id: "488", name: "Messman" }]);
        break;

      // case "8":

      case "279":
        setNewPositions([{ id: "489", name: "Captain (Master)" }]);
        break;
      case "280":
        setNewPositions([
          { id: "490", name: "Captain (Master)" },
          { id: "491", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "281":
        setNewPositions([
          { id: "492", name: "Chief Officer (Chief Mate)" },
          { id: "493", name: "Second Officer (Second Mate)" },
        ]);
        break;
      case "282":
        setNewPositions([
          { id: "494", name: "Second Officer (Second Mate)" },
          { id: "495", name: "Third Officer (Third Mate)" },
        ]);
        break;
      case "283":
        setNewPositions([
          { id: "496", name: "Third Officer (Third Mate)" },
          { id: "497", name: "Junior Officer" },
        ]);
        break;
      case "284":
        setNewPositions([
          { id: "498", name: "Junior Officer" },
          { id: "499", name: "Deck Cadet" },
        ]);
        break;
      case "285":
        setNewPositions([
          // { id: "500", name: "Captain (Master)" },
          { id: "501", name: "Chief Engineer" },
        ]);
        break;
      case "286":
        setNewPositions([
          { id: "502", name: "Chief Engineer" },
          { id: "503", name: "Second Engineer" },
        ]);
        break;
      case "287":
        setNewPositions([
          { id: "504", name: "Second Engineer" },
          { id: "505", name: "Third Engineer" },
        ]);
        break;
      case "288":
        setNewPositions([
          { id: "506", name: "Third Engineer" },
          { id: "507", name: "Fourth Engineer" },
        ]);
        break;
      case "289":
        setNewPositions([
          { id: "508", name: "TME" },
          { id: "540", name: "Fourth Engineer" },
        ]);
        break;
      case "290":
        setNewPositions([
          { id: "509", name: "Electro-Technical Officer" },
          { id: "510", name: "Electrical Officer (EO)" },
        ]);
        break;
      case "291":
        setNewPositions([
          { id: "511", name: "Electrical Officer (EO)" },
          { id: "512", name: "Electro-Technical Officer" },
        ]);
        break;
      case "292":
        setNewPositions([{ id: "513", name: "Bosun" }]);
        break;
      case "293":
        setNewPositions([
          { id: "514", name: "Bosun" },
          { id: "515", name: "Able Seaman (AB)" },
        ]);
        break;
      case "294":
        setNewPositions([
          { id: "516", name: "Able Seaman (AB)" },
          { id: "517", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "295":
        setNewPositions([
          { id: "518", name: "Ordinary Seaman (OS)" },
          { id: "519", name: "Trainee OS" },
        ]);
        break;
      case "296":
        setNewPositions([{ id: "520", name: "Fitter" }]);
        break;
      case "297":
        setNewPositions([{ id: "521", name: "Motorman/Oiler" }]);
        break;
      case "298":
        setNewPositions([{ id: "522", name: "Wiper" }]);
        break;
      case "299":
        setNewPositions([{ id: "523", name: "Pumpman" }]);
        break;
      case "300":
        setNewPositions([{ id: "524", name: "Second Cook" }]);
        break;
      case "301":
        setNewPositions([
          { id: "525", name: "Chief Cook" },
          { id: "526", name: "Second Cook" },
        ]);
        break;
      case "302":
        setNewPositions([
          { id: "527", name: "Second Cook" },
          { id: "528", name: "Trainee Cook" },
        ]);
        break;
      case "303":
        setNewPositions([{ id: "529", name: "General Steward" }]);
        break;
      case "304":
        setNewPositions([
          { id: "530", name: "Ordinary Seaman (OS)" },
          { id: "531", name: "Steward" },
        ]);
        break;
      case "305":
        setNewPositions([{ id: "532", name: "Welder" }]);
        break;
      case "306":
        setNewPositions([{ id: "533", name: "Messman" }]);
        break;
    }
  };

  const handleNewPositionChange = (e) => {
    const newPositionName = e.target.value;
    const newPositionValue = e.target.value;
    setNewPositionName(newPositionName);
    // Handle new position change logic here
    console.log("Selected New Position ID:", newPositionName);
  };

  const stateData = State.getStatesOfCountry(selectCountry).map((state) => ({
    value: state.value,
    displayValue: state.name,
    innerValue: state.isoCode,
  }));
  const cityData = City.getCitiesOfState(selectCountry, selectState).map(
    (city) => ({
      CityValue: city.value,
      CityValue: city.name,
    })
  );

  const isBlank = (str) => {
    return !str.trim();
  };
  //const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const customErrors = {
    field: "email",
    message: "Please enter a valid email address.",
  };
  const customDomainErrors = {
    field: "email",
    message: "This email domain is not allowed.",
  };
  const customPhoneErrors = {
    field: "contactNo",
    message: "Please enter only numbers.",
  };

  const notAllowedDomains = [
    "test.com",
    "sample.com",
    "example.com",
    "testing.com",
  ];
  function isValidEmail(email) {
    const [_, domain] = email.split("@");
    return notAllowedDomains.includes(domain);
  }
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate if the input is for the contact number
    if (name === "contactNo") {
      // Check if the value contains only numbers
      if (!/^\d+$/.test(value)) {
        // If the value contains non-numeric characters, show an alert
        const fieldErrors = {};
        const { field, message } = customPhoneErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
        //alert('Please enter only numbers.');
        return; // Stop further processing
      } else {
        setErrors("");
      }
    }

    if (e.target.name === "email") {
      if (!emailRegex.test(e.target.value)) {
        //console.log("enter valid email address")
        const fieldErrors = {};
        const { field, message } = customErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
        //alert('valid email enter')
      } else {
        //console.log("email is valid")
        setErrors("");
      }
      if (isValidEmail(e.target.value)) {
        //console.log('Email domain is not allowed');
        const fieldErrors = {};
        const { field, message } = customDomainErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
      } else {
        //console.log('Email domain is allowed');
        setHideSubmitButton(true);
      }
    }
    if (name === "indosNo") {
      // Check if the value is alphanumeric and exactly 8 characters
      if (!/^[A-Za-z0-9]{8}$/.test(value)) {
        const fieldErrors = {};
        fieldErrors[name] =
          "INDoS No. must be exactly 8 alphanumeric characters.";
        setErrors(fieldErrors);
      } else {
        setErrors({});
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const customFileErrors = {
    field: "resume",
    message: "Invalid file type. Allowed types are PDF, DOC, DOCX,RTF and TXT.",
  };
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      // Check file extension
      const allowedExtensions = ["pdf", "doc", "docx", "rtf", "txt"];
      const fileExtension = selectedFile.name.split(".").pop().toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        // Valid file type
        setHideSubmitButton(false);
        setErrors("");
      } else {
        // Invalid file type
        const fieldErrors = {};
        const { field, message } = customFileErrors;
        fieldErrors[field] = message;
        setErrors(fieldErrors);
        // alert('Error: Invalid file type. Allowed types are PDF, DOC, DOCX, and RTF.');
        setHideSubmitButton(true); // Depending on your logic, you may want to hide the submit button here
      }

      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }
      // formDataToSend.append('state', yourState);
      // formDataToSend.append('city', yourState);
      if (yourState) {
        //console.log(yourState)
        formDataToSend.append("state", yourState);
      }
      if (yourCity) {
        //console.log(yourCity)
        formDataToSend.append("city", yourCity);
      }
      if (vessel) {
        //console.log(vessel);
        formDataToSend.append("vessel", selectedVessel);
      }
      if (position) {
        console.log("position is here", selectedPosition);
        formDataToSend.append("position", selectedPosition);
      }

      if (newPositionName) {
        console.log("New Position", newPositionName);
        formDataToSend.append("newPositionName", newPositionName);
      }

      if (!file) {
        //console.log('empty')
        setHideSubmitButton(true);
        setFileErrors(true);
      } else {
        //console.log('not empty')
        formDataToSend.append("resume", file);
        setFileErrors(false);
        setHideSubmitButton(false);
      }
      if (utm_source) {
        console.log(utm_source);
        formDataToSend.append("utm_source", utm_source);
      }
      if (utm_medium) {
        console.log(utm_medium);
        formDataToSend.append("utm_medium", utm_medium);
      }
      if (utm_campaign) {
        console.log(utm_campaign);
        formDataToSend.append("utm_campaign", utm_campaign);
      }

      const response = await axios.post(
        `${server.SERVER_FROM}contact-form-7/v1/contact-forms/9602/feedback`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      //console.log(response)
      if (response.data.status === "mail_sent") {
        setFormVisible(false); // Hide the form
        setSuccessMessage(true);
      } else if (response.data.status == "validation_failed") {
        const fieldErrors = {};
        const { status, invalid_fields } = response.data;
        console.log(invalid_fields);
        invalid_fields.forEach((field) => {
          fieldErrors[field.field] = field.message;
        });
        setErrors(fieldErrors);
        //console.log(fieldErrors);
      } else {
        setError("An error occurred. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  useEffect(() => {
    // Tracking code function
    const trackConversion = () => {
      window.lintrk("track", { conversion_id: 17896705 });
    };

    // Attach event listener to the submit button
    const submitButton = document.getElementById("submit-button");
    if (submitButton) {
      submitButton.addEventListener("click", trackConversion);
    }

    // Clean up event listener on component unmount
    return () => {
      if (submitButton) {
        submitButton.removeEventListener("click", trackConversion);
      }
    };
  }, []);

  return (
    <>
      {successMessage ? (
        ""
      ) : (
        <small style={{ color: "#555" }}>All fields are mandatory</small>
      )}
      {successMessage ? "" : <h3>Submit a CV/Resume(Offshore Job):</h3>}

      <div className="form-bg mb-1">
        {formVisible ? (
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <Row>
              <Col>
                <div className="mb-3">
                  <input
                    type="text"
                    name="firstname"
                    className={`form-control ${
                      errors && errors.firstname ? "is-invalid" : ""
                    }`}
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    inputProps={{ maxLength: 6 }}
                  />
                  {errors && errors.firstname && (
                    <div className="invalid-feedback">{errors.firstname}</div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <input
                    type="phone"
                    name="contactNo"
                    maxLength="10"
                    className={`form-control ${
                      errors && errors.contactNo ? "is-invalid" : ""
                    }`}
                    placeholder="Contact No."
                    value={formData.contactNo}
                    onChange={handleChange}
                  />
                  {errors && errors.contactNo && (
                    <div className="invalid-feedback">{errors.contactNo}</div>
                  )}
                </div>
              </Col>

              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${
                      errors && errors.email ? "is-invalid" : ""
                    }`}
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors && errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <select
                    onChange={handleStateChange}
                    id="state"
                    name="state"
                    className={`form-select form-control ${
                      errors && errors.state ? "is-invalid" : ""
                    }`}
                    defaultValue={yourState}
                  >
                    <option value="">Select State</option>
                    {stateData.map((option, index) => (
                      <option key={index} value={option.innerValue}>
                        {option.displayValue}
                      </option>
                    ))}
                  </select>
                  {errors && errors.state && (
                    <div className="invalid-feedback">{errors.state}</div>
                  )}
                </div>
              </Col>

              <Col lg={6} sm={12}>
                <div className="mb-3">
                  <select
                    className={`form-control form-select ${
                      errors && errors.city ? "is-invalid" : ""
                    }`}
                    id="city"
                    name="city"
                    value={yourCity}
                    onChange={handleCityChange}
                  >
                    <option>Select City</option>
                    {cityData.map((option, index) => (
                      <option key={index} value={option.CityValue}>
                        {option.CityValue}
                      </option>
                    ))}
                  </select>

                  {errors && errors.city && (
                    <div className="invalid-feedback">{errors.city}</div>
                  )}
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={12} sm={12}>
                <div className="mb-3">
                  <select
                    className="form-control form-select"
                    id="vessel"
                    name="vessel"
                    onChange={handleVesselChange}
                  >
                    <option value="">Select Vessel</option>
                    {vessel.map((option, index) => (
                      <option key={index} value={option.id}>
                        {option.vessel_name}
                      </option>
                    ))}
                  </select>
                </div>
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <div className="mb-3">
                  <select
                    id="position"
                    name="position"
                    className="form-control form-select"
                    disabled={!selectedVessel}
                    onChange={handlePositionChange}
                    // value={selectedPosition}
                  >
                    <option value="">Select Position</option>
                    {positions.map((position) => (
                      <option
                        key={position.id}
                        value={position.id}
                        data={position.name}
                      >
                        {position.name}
                      </option>
                    ))}
                  </select>
                  <p
                    className="pt-1"
                    style={{ lineHeight: "16px", fontSize: "12px" }}
                  >
                    Please select your current/previous Rank/Position.
                  </p>
                </div>
              </Col>

              {/* New Position Selection - Only enabled when a position is selected */}

              <Col lg={6}>
                <div className="mb-3">
                  <select
                    id="newPositions"
                    name="newPositions"
                    className="form-control form-select"
                    disabled={isNewPositionDisabled} // Disable based on isNewPositionDisabled state
                    onChange={handleNewPositionChange}
                    // value="" // You may want to control the selected value here
                  >
                    <option value="">Select New Position</option>
                    {newPositions.map((newPositions) => (
                      <option key={newPositions.name} value={newPositions.name}>
                        {newPositions.name}
                      </option>
                    ))}
                  </select>
                  <p
                    className="pt-1"
                    style={{ lineHeight: "16px", fontSize: "12px" }}
                  >
                    Please select the Rank/Position you want to apply at
                    Nautilus.
                  </p>
                </div>
              </Col>
            </Row>

            <Row>
              <Col sm={12} lg={12}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="indosNo"
                    maxLength="8"
                    minLength="8"
                    className={`form-control ${
                      errors && errors.indosNo ? "is-invalid" : ""
                    }`}
                    placeholder="INDoS No."
                    value={formData.indosNo}
                    onChange={handleChange}
                    onKeyDown={(e) => {
                      // Allow only alphanumeric input and control keys
                      const isAlphanumeric = /^[A-Za-z0-9]$/;
                      if (
                        !(
                          e.key === "Tab" ||
                          e.key === "Backspace" ||
                          e.key === "Delete" ||
                          e.key === "ArrowLeft" ||
                          e.key === "ArrowRight" ||
                          isAlphanumeric.test(e.key)
                        )
                      ) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors && errors.indosNo && (
                    <div className="invalid-feedback">{errors.indosNo}</div>
                  )}
                </div>
              </Col>

              <Col sm={12} lg={12}>
                <div class="input-group">
                  <input
                    type="file"
                    name="resume"
                    id="resume"
                    class={`form-control ${
                      errors && errors.resume ? "is-invalid" : ""
                    }
                    ${fileErrors ? "is-invalid" : ""} `}
                    onChange={handleFileChange}
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                  />
                </div>
                {/* <Form.Group controlId="formFile" className="">
                  <Form.Control type="file" name="resume" id="resume" onChange={handleFileChange}
                    className={`custom-file-input ${errors && errors.resume ? 'is-invalid' : ''}
                    ${fileErrors ? 'is-invalid' : ''} 
                    
                    `}
                    />
                </Form.Group> */}
                <p
                  className="pt-1"
                  style={{ lineHeight: "16px", fontSize: "12px" }}
                >
                  Complete your job application by uploading your resume or CV.
                  Upload either DOC, DOCX, PDF, RTF or TXT file types, 4 MB max.
                </p>
                {errors && errors.resume && (
                  <div className="invalid-feedback">{errors.resume}</div>
                )}
                <div className="fs-6" style={{ color: "#b02a37" }}>
                  {" "}
                  {errors && errors.resume && errors.resume}
                </div>
                {fileErrors ? (
                  <div className="error">
                    Please upload the resume.(doc,docx,pdf)
                  </div>
                ) : (
                  ""
                )}
              </Col>
            </Row>
            <Row>
              <Col sm={12} lg={12}>
                <div className="">
                  <input
                    type="hidden"
                    name="utm_source"
                    maxLength="8"
                    className="form-control"
                    value={utm_source}
                  />
                </div>
              </Col>
              <Col sm={12} lg={12}>
                <div className="">
                  <input
                    type="hidden"
                    name="utm_medium"
                    maxLength="8"
                    className="form-control"
                    value={utm_medium}
                  />
                </div>
              </Col>
              <Col sm={12} lg={12}>
                <div className="">
                  <input
                    type="hidden"
                    name="utm_campaign"
                    maxLength="8"
                    className="form-control"
                    value={utm_campaign}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col sm={12}>
                <button
                  id="submit-button"
                  type="submit"
                  className={
                    hideSubmitButton
                      ? "btn btn-primary register disabled"
                      : "btn btn-primary register"
                  }
                  disabled={isSubmitting}
                >
                  Submit
                  {isSubmitting && (
                    <RotatingLines
                      strokeColor="white"
                      strokeWidth="3"
                      animationDuration="1"
                      width="20"
                      visible={true}
                    />
                  )}
                </button>
              </Col>
            </Row>
            {/* {error && <p className="error">{error}</p>} */}
          </form>
        ) : (
          <div className="mt-5 text-center mb-5">
            <h3 className="fs-1">
              Thank you for your interest in Nautilus Shipping.
            </h3>
            <h3 className="fs-4">
              We will get in touch with you as soon as possible.
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default CareerForm;
