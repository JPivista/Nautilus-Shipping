import React, { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Form, ListGroup } from "react-bootstrap";
import { RotatingLines } from "react-loader-spinner";
import server from "../config.json";
import { Country, State, City } from "country-state-city";
import { useRouter } from "next/router";

const ContactForm = ({ subject }) => {
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
          { id: "102", name: "Chief Officer" },
          { id: "103", name: "2nd Officer" },
          { id: "104", name: "3rd Officer " },
          { id: "105", name: "Deck Cadet" },
          { id: "106", name: "Able - Bodied Seaman(ABs)" },
          { id: "107", name: "Bosun" },
          { id: "108", name: "Ordinary Seaman(OS)" },
          { id: "109", name: "Chief Engineer " },
          { id: "110", name: "2nd Engineer" },
          { id: "111", name: "3rd Engineer" },
          { id: "112", name: "4th Engineer" },
          { id: "113", name: "Electrical Officer (ETO)" },
          { id: "114", name: "Wiper" },
          { id: "115", name: "Fitter" },
          { id: "116", name: "Cook" },
          { id: "117", name: "Welder" },
          { id: "118", name: "Messman" },
          { id: "119", name: "Motorman" },
        ]);
        setPosition("");
        break;
      case "2":
        setPositions([
          { id: "120", name: "Chief Officer " },
          { id: "121", name: "2nd Officer" },
          { id: "122", name: "3rd Officer " },
          { id: "123", name: "Deck Cadet" },
          { id: "124", name: "Able - Bodied Seaman(ABs)" },
          { id: "125", name: "Bosun" },
          { id: "126", name: "Ordinary Seaman(OS)" },
          { id: "127", name: "Chief Engineer " },
          { id: "128", name: "2nd Engineer" },
          { id: "129", name: "3rd Engineer" },
          { id: "130", name: "4th Engineer" },
          { id: "131", name: "Electrical Officer (ETO)" },
          { id: "132", name: "Wiper" },
          { id: "133", name: "Fitter" },
          { id: "134", name: "Cook" },
          { id: "135", name: "Welder" },
          { id: "136", name: "Messman" },
          { id: "137", name: "Motorman" },
        ]);
        setPosition("");
        break;
      case "3":
        setPositions([
          { id: "138", name: "NCV Master" },
          { id: "139", name: "NCV Mate" },
          { id: "140", name: "NWKO/2nd Officer" },
          { id: "141", name: "NCV Chief Engineer" },
          { id: "142", name: "NCV 2nd Engineer" },
        ]);
        setPosition("");
        break;
      case "4":
        setPositions([
          { id: "143", name: "Chief Officer " },
          { id: "144", name: "2nd Officer" },
          { id: "145", name: "3rd Officer " },
          { id: "146", name: "Deck Cadet" },
          { id: "147", name: "Able - Bodied Seaman(ABs)" },
          { id: "148", name: "Bosun" },
          { id: "149", name: "Ordinary Seaman(OS)" },
          { id: "150", name: "Chief Engineer " },
          { id: "151", name: "2nd Engineer" },
          { id: "152", name: "3rd Engineer" },
          { id: "153", name: "4th Engineer" },
          { id: "154", name: "Electrical Officer (ETO)" },
          { id: "155", name: "Wiper" },
          { id: "156", name: "Fitter" },
          { id: "157", name: "Cook" },
          { id: "158", name: "Welder" },
          { id: "159", name: "Messman" },
          { id: "160", name: "Motorman" },
        ]);
        setPosition("");
        break;

      // case "5":
      //   setPositions([
      //     "Chief Officer ",
      //     "2nd Officer",
      //     "3rd Officer ",
      //     "Deck Cadet",
      //     "Able - Bodied Seaman(ABs)",
      //     "Bosun",
      //     "Ordinary Seaman(OS)",
      //     "Chief Engineer ",
      //     "2nd Engineer",
      //     "3rd Engineer",
      //     "4th Engineer",
      //     "Electrical Officer (ETO)",
      //   ]);
      //   setPosition("");
      //   break;

      case "5":
        setPositions([
          { id: "161", name: "Chief Officer " },
          { id: "162", name: "2nd Officer" },
          { id: "163", name: "3rd Officer " },
          { id: "164", name: "Deck Cadet" },
          { id: "165", name: "Able - Bodied Seaman(ABs)" },
          { id: "166", name: "Bosun" },
          { id: "167", name: "Ordinary Seaman(OS)" },
          { id: "168", name: "Chief Engineer " },
          { id: "169", name: "2nd Engineer" },
          { id: "170", name: "3rd Engineer" },
          { id: "171", name: "4th Engineer" },
          { id: "172", name: "Electrical Officer (ETO)" },
          { id: "173", name: "Wiper" },
          { id: "174", name: "Fitter" },
          { id: "175", name: "Cook" },
          { id: "176", name: "Welder" },
          { id: "177", name: "Messman" },
          { id: "178", name: "Motorman" },
        ]);
        setPosition("");
        break;
      case "6":
        setPositions([
          { id: "179", name: "Chief Officer " },
          { id: "180", name: "2nd Officer" },
          { id: "181", name: "3rd Officer " },
          { id: "182", name: "Deck Cadet" },
          { id: "183", name: "Able - Bodied Seaman(ABs)" },
          { id: "184", name: "Bosun" },
          { id: "185", name: "Ordinary Seaman(OS)" },
          { id: "186", name: "Chief Engineer " },
          { id: "187", name: "2nd Engineer" },
          { id: "188", name: "3rd Engineer" },
          { id: "189", name: "4th Engineer" },
          { id: "190", name: "Electrical Officer (ETO)" },
          { id: "191", name: "Wiper" },
          { id: "192", name: "Fitter" },
          { id: "193", name: "Cook" },
          { id: "194", name: "Welder" },
          { id: "195", name: "Messman" },
          { id: "196", name: "Motorman" },
        ]);
        setPosition("");
        break;
      case "7":
        setPositions([
          { id: "197", name: "Chief Officer " },
          { id: "198", name: "2nd Officer" },
          { id: "199", name: "3rd Officer " },
          { id: "200", name: "Deck Cadet" },
          { id: "201", name: "Able - Bodied Seaman(ABs)" },
          { id: "202", name: "Bosun" },
          { id: "203", name: "Ordinary Seaman(OS)" },
          { id: "204", name: "Chief Engineer " },
          { id: "205", name: "2nd Engineer" },
          { id: "206", name: "3rd Engineer" },
          { id: "207", name: "4th Engineer" },
          { id: "208", name: "Electrical Officer (ETO)" },
          { id: "209", name: "Wiper" },
          { id: "210", name: "Fitter" },
          { id: "211", name: "Cook" },
          { id: "212", name: "Welder" },
          { id: "213", name: "Messman" },
          { id: "214", name: "Motorman" },
        ]);
        setPosition("");
        break;

      case "8":
        setPositions([
          { id: "215", name: "Chief Officer " },
          { id: "216", name: "2nd Officer" },
          { id: "217", name: "3rd Officer " },
          { id: "218", name: "Deck Cadet" },
          { id: "219", name: "Able - Bodied Seaman(ABs)" },
          { id: "220", name: "Bosun" },
          { id: "221", name: "Ordinary Seaman(OS)" },
          { id: "222", name: "Chief Engineer " },
          { id: "223", name: "2nd Engineer" },
          { id: "224", name: "3rd Engineer" },
          { id: "225", name: "4th Engineer" },
          { id: "226", name: "Electrical Officer (ETO)" },
          { id: "227", name: "Wiper" },
          { id: "228", name: "Fitter" },
          { id: "229", name: "Cook" },
          { id: "230", name: "Welder" },
          { id: "231", name: "Messman" },
          { id: "232", name: "Motorman" },
        ]);
        setPosition("");
        break;

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
      //  case "1": 101-119

      case "101":
        setNewPositions([{ id: "201", name: "Gas Engineer" }]);
        break;
      case "102":
        setNewPositions([
          { id: "202", name: "Captain (Master)" },
          { id: "203", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "103":
        setNewPositions([
          { id: "204", name: "Chief Officer (Chief Mate)" },
          { id: "205", name: "2nd Officer" },
        ]);
        break;
      case "104":
        setNewPositions([
          { id: "206", name: "2nd Officer (Second Mate)" },
          { id: "207", name: "3rd Officer (Third Mate)" },
        ]);
        break;
      case "105":
        setNewPositions([
          { id: "208", name: "Junior Officer" },
          { id: "209", name: "Deck Cadet" },
        ]);
        break;
      case "106":
        setNewPositions([
          { id: "210", name: "Bosun" },
          { id: "211", name: "Able Seaman (AB)" },
        ]);
        break;
      case "107":
        setNewPositions([{ id: "212", name: "Bosun" }]);
        break;
      case "108":
        setNewPositions([
          { id: "213", name: "Able Seaman (AB)" },
          { id: "214", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "109":
        setNewPositions([
          { id: "215", name: "Captain (Master)" },
          { id: "216", name: "Chief Engineer" },
        ]);
        break;
      case "110":
        setNewPositions([
          { id: "217", name: "Chief Engineer" },
          { id: "218", name: "2nd Engineer" },
        ]);
        break;
      case "111":
        setNewPositions([
          { id: "219", name: "2nd Engineer" },
          { id: "220", name: "3rd Engineer" },
        ]);
        break;
      case "112":
        setNewPositions([
          { id: "221", name: "3rd Engineer" },
          { id: "222", name: "4th Engineer" },
        ]);
        break;
      case "113":
        setNewPositions([
          { id: "223", name: "Second Engineer" },
          { id: "224", name: "Electrical Officer (ETO)" },
        ]);
        break;
      case "114":
        setNewPositions([{ id: "225", name: "Wiper" }]);
        break;
      case "115":
        setNewPositions([{ id: "226", name: "Fitter" }]);
        break;
      case "116":
        setNewPositions([{ id: "227", name: "Cook" }]);
        break;
      case "117":
        setNewPositions([{ id: "228", name: "Welder" }]);
        break;
      case "118":
        setNewPositions([{ id: "229", name: "Messman" }]);
        break;
      case "119":
        setNewPositions([{ id: "230", name: "Motorman" }]);
        break;

      //  case "2": 120-137
      case "120":
        setNewPositions([
          { id: "231", name: "Captain (Master)" },
          { id: "232", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "121":
        setNewPositions([
          { id: "233", name: "Chief Officer (Chief Mate)" },
          { id: "234", name: "2nd Officer" },
        ]);
        break;
      case "122":
        setNewPositions([
          { id: "235", name: "2nd Officer (Second Mate)" },
          { id: "236", name: "3rd Officer (Third Mate)" },
        ]);
        break;
      case "123":
        setNewPositions([
          { id: "237", name: "Junior Officer" },
          { id: "238", name: "Deck Cadet" },
        ]);
        break;
      case "124":
        setNewPositions([
          { id: "239", name: "Bosun" },
          { id: "240", name: "Able Seaman (AB)" },
        ]);
        break;
      case "125":
        setNewPositions([{ id: "241", name: "Bosun" }]);
        break;
      case "126":
        setNewPositions([
          { id: "242", name: "Able Seaman (AB)" },
          { id: "243", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "127":
        setNewPositions([
          { id: "244", name: "Captain (Master)" },
          { id: "245", name: "Chief Engineer" },
        ]);
        break;
      case "128":
        setNewPositions([
          { id: "246", name: "Chief Engineer" },
          { id: "247", name: "2nd Engineer" },
        ]);
        break;
      case "129":
        setNewPositions([
          { id: "248", name: "2nd Engineer" },
          { id: "249", name: "3rd Engineer" },
        ]);
        break;
      case "130":
        setNewPositions([
          { id: "250", name: "3rd Engineer" },
          { id: "251", name: "4th Engineer" },
        ]);
        break;

      case "131":
        setNewPositions([
          { id: "252", name: "Second Engineer" },
          { id: "253", name: "Electrical Officer (ETO)" },
        ]);
        break;
      case "132":
        setNewPositions([{ id: "254", name: "Wiper" }]);
        break;
      case "133":
        setNewPositions([{ id: "255", name: "Fitter" }]);
        break;
      case "134":
        setNewPositions([{ id: "256", name: "Cook" }]);
        break;
      case "135":
        setNewPositions([{ id: "257", name: "Welder" }]);
        break;
      case "136":
        setNewPositions([{ id: "258", name: "Messman" }]);
        break;
      case "137":
        setNewPositions([{ id: "259", name: "Motorman" }]);
        break;

      // case "3":138-142
      case "138":
        setNewPositions([{ id: "260", name: "NCV Master" }]);
        break;
      case "139":
        setNewPositions([
          { id: "261", name: "NCV Master" },
          { id: "262", name: "NCV Mate (Chief Officer)" },
        ]);
        break;
      case "140":
        setNewPositions([
          { id: "413", name: "NCV Mate" }, // New Update..
          { id: "263", name: "NWKO/2nd Officer" },
        ]);
        break;
      case "141":
        setNewPositions([
          { id: "264", name: "NCV Master" },
          { id: "265", name: "NCV Chief Engineer" },
        ]);
        break;
      case "142":
        setNewPositions([
          { id: "266", name: "NCV Chief Engineer" },
          { id: "267", name: "NCV 2nd Engineer" },
        ]);
        break;

      // case "4": 143-160

      case "143":
        setNewPositions([
          { id: "268", name: "Captain (Master)" },
          { id: "269", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "144":
        setNewPositions([
          { id: "270", name: "Chief Officer (Chief Mate)" },
          { id: "271", name: "2nd Officer" },
        ]);
        break;
      case "145":
        setNewPositions([
          { id: "272", name: "2nd Officer (Second Mate)" },
          { id: "273", name: "3rd Officer (Third Mate)" },
        ]);
        break;
      case "146":
        setNewPositions([
          { id: "274", name: "Junior Officer" },
          { id: "275", name: "Deck Cadet" },
        ]);
        break;
      case "147":
        setNewPositions([
          { id: "276", name: "Bosun" },
          { id: "277", name: "Able Seaman (AB)" },
        ]);
        break;
      case "148":
        setNewPositions([{ id: "278", name: "Bosun" }]);
        break;
      case "149":
        setNewPositions([
          { id: "279", name: "Able Seaman (AB)" },
          { id: "280", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "150":
        setNewPositions([
          { id: "281", name: "Captain (Master)" },
          { id: "282", name: "Chief Engineer" },
        ]);
        break;
      case "151":
        setNewPositions([
          { id: "283", name: "Chief Engineer" },
          { id: "284", name: "2nd Engineer" },
        ]);
        break;
      case "152":
        setNewPositions([
          { id: "285", name: "2nd Engineer" },
          { id: "286", name: "3rd Engineer" },
        ]);
        break;
      case "153":
        setNewPositions([
          { id: "287", name: "3rd Engineer" },
          { id: "288", name: "4th Engineer" },
        ]);
        break;
      case "154":
        setNewPositions([
          { id: "289", name: "Second Engineer" },
          { id: "290", name: "Electrical Officer (ETO)" },
        ]);
        break;
      case "155":
        setNewPositions([{ id: "291", name: "Wiper" }]);
        break;
      case "156":
        setNewPositions([{ id: "292", name: "Fitter" }]);
        break;
      case "157":
        setNewPositions([{ id: "293", name: "Cook" }]);

        break;
      case "158":
        setNewPositions([{ id: "294", name: "Welder" }]);
        break;
      case "159":
        setNewPositions([{ id: "295", name: "Messman" }]);
        break;
      case "160":
        setNewPositions([{ id: "296", name: "Motorman" }]);
        break;

      // case "5":161-178
      case "161":
        setNewPositions([
          { id: "297", name: "Captain (Master)" },
          { id: "298", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "162":
        setNewPositions([
          { id: "299", name: "Chief Officer (Chief Mate)" },
          { id: "300", name: "2nd Officer" },
        ]);
        break;
      case "163":
        setNewPositions([
          { id: "301", name: "2nd Officer (Second Mate)" },
          { id: "302", name: "3rd Officer (Third Mate)" },
        ]);
        break;
      case "164":
        setNewPositions([
          { id: "303", name: "Junior Officer" },
          { id: "304", name: "Deck Cadet" },
        ]);
        break;
      case "165":
        setNewPositions([
          { id: "305", name: "Bosun" },
          { id: "306", name: "Able Seaman (AB)" },
        ]);
        break;
      case "166":
        setNewPositions([{ id: "307", name: "Bosun" }]);
        break;
      case "167":
        setNewPositions([
          { id: "308", name: "Able Seaman (AB)" },
          { id: "309", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "168":
        setNewPositions([
          { id: "310", name: "Captain (Master)" },
          { id: "311", name: "Chief Engineer" },
        ]);
        break;
      case "169":
        setNewPositions([
          { id: "312", name: "Chief Engineer" },
          { id: "313", name: "2nd Engineer" },
        ]);
        break;
      case "170":
        setNewPositions([
          { id: "314", name: "2nd Engineer" },
          { id: "315", name: "3rd Engineer" },
        ]);
        break;
      case "171":
        setNewPositions([
          { id: "316", name: "3rd Engineer" },
          { id: "317", name: "4th Engineer" },
        ]);
        break;
      case "172":
        setNewPositions([
          { id: "318", name: "Second Engineer" },
          { id: "319", name: "Electrical Officer (ETO)" },
        ]);
        break;
      case "173":
        setNewPositions([{ id: "320", name: "Wiper" }]);
        break;
      case "174":
        setNewPositions([{ id: "321", name: "Fitter" }]);
        break;
      case "175":
        setNewPositions([{ id: "322", name: "Cook" }]);
        break;
      case "176":
        setNewPositions([{ id: "323", name: "Welder" }]);
        break;
      case "177":
        setNewPositions([{ id: "324", name: "Messman" }]);
        break;
      case "178":
        setNewPositions([{ id: "325", name: "Motorman" }]);
        break;

      //case "6" 179- 196
      case "179":
        setNewPositions([
          { id: "326", name: "Captain (Master)" },
          { id: "327", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "180":
        setNewPositions([
          { id: "328", name: "Chief Officer (Chief Mate)" },
          { id: "329", name: "2nd Officer" },
        ]);
        break;
      case "181":
        setNewPositions([
          { id: "330", name: "2nd Officer (Second Mate)" },
          { id: "331", name: "3rd Officer (Third Mate)" },
        ]);
        break;
      case "182":
        setNewPositions([
          { id: "332", name: "Junior Officer" },
          { id: "333", name: "Deck Cadet" },
        ]);
        break;
      case "183":
        setNewPositions([
          { id: "334", name: "Bosun" },
          { id: "335", name: "Able Seaman (AB)" },
        ]);
        break;
      case "184":
        setNewPositions([{ id: "336", name: "Bosun" }]);
        break;
      case "185":
        setNewPositions([
          { id: "337", name: "Able Seaman (AB)" },
          { id: "338", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "186":
        setNewPositions([
          { id: "339", name: "Captain (Master)" },
          { id: "340", name: "Chief Engineer" },
        ]);
        break;
      case "187":
        setNewPositions([
          { id: "341", name: "Chief Engineer" },
          { id: "342", name: "2nd Engineer" },
        ]);
        break;
      case "188":
        setNewPositions([
          { id: "343", name: "2nd Engineer" },
          { id: "344", name: "3rd Engineer" },
        ]);
        break;
      case "189":
        setNewPositions([
          { id: "345", name: "3rd Engineer" },
          { id: "346", name: "4th Engineer" },
        ]);
        break;
      case "190":
        setNewPositions([
          { id: "347", name: "Second Engineer" },
          { id: "348", name: "Electrical Officer (ETO)" },
        ]);
        break;
      case "191":
        setNewPositions([{ id: "349", name: "Wiper" }]);
        break;
      case "192":
        setNewPositions([{ id: "350", name: "Fitter" }]);
        break;
      case "193":
        setNewPositions([{ id: "351", name: "Cook" }]);
        break;
      case "194":
        setNewPositions([{ id: "352", name: "Welder" }]);
        break;
      case "195":
        setNewPositions([{ id: "353", name: "Messman" }]);
        break;
      case "196":
        setNewPositions([{ id: "354", name: "Motorman" }]);
        break;

      // case "7": 197-214
      case "197":
        setNewPositions([
          { id: "355", name: "Captain (Master)" },
          { id: "356", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "198":
        setNewPositions([
          { id: "357", name: "Chief Officer (Chief Mate)" },
          { id: "358", name: "2nd Officer" },
        ]);
        break;
      case "199":
        setNewPositions([
          { id: "359", name: "2nd Officer (Second Mate)" },
          { id: "360", name: "3rd Officer (Third Mate)" },
        ]);
        break;
      case "200":
        setNewPositions([
          { id: "361", name: "Junior Officer" },
          { id: "362", name: "Deck Cadet" },
        ]);
        break;
      case "201":
        setNewPositions([
          { id: "363", name: "Bosun" },
          { id: "364", name: "Able Seaman (AB)" },
        ]);
        break;
      case "202":
        setNewPositions([{ id: "365", name: "Bosun" }]);
        break;
      case "203":
        setNewPositions([
          { id: "366", name: "Able Seaman (AB)" },
          { id: "367", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "204":
        setNewPositions([
          { id: "368", name: "Captain (Master)" },
          { id: "369", name: "Chief Engineer" },
        ]);
        break;
      case "205":
        setNewPositions([
          { id: "370", name: "Chief Engineer" },
          { id: "371", name: "2nd Engineer" },
        ]);
        break;
      case "206":
        setNewPositions([
          { id: "372", name: "2nd Engineer" },
          { id: "373", name: "3rd Engineer" },
        ]);
        break;
      case "207":
        setNewPositions([
          { id: "374", name: "3rd Engineer" },
          { id: "375", name: "4th Engineer" },
        ]);
        break;
      case "208":
        setNewPositions([
          { id: "376", name: "Second Engineer" },
          { id: "377", name: "Electrical Officer (ETO)" },
        ]);
        break;
      case "209":
        setNewPositions([{ id: "378", name: "Wiper" }]);
        break;
      case "210":
        setNewPositions([{ id: "379", name: "Fitter" }]);
        break;
      case "211":
        setNewPositions([{ id: "380", name: "Cook" }]);
        break;
      case "212":
        setNewPositions([{ id: "381", name: "Welder" }]);
        break;
      case "213":
        setNewPositions([{ id: "382", name: "Messman" }]);
        break;
      case "214":
        setNewPositions([{ id: "383", name: "Motorman" }]);
        break;

      // case "7": 197-214
      case "215":
        setNewPositions([
          { id: "384", name: "Captain (Master)" },
          { id: "385", name: "Chief Officer (Chief Mate)" },
        ]);
        break;
      case "216":
        setNewPositions([
          { id: "386", name: "Chief Officer (Chief Mate)" },
          { id: "387", name: "2nd Officer" },
        ]);
        break;
      case "217":
        setNewPositions([
          { id: "388", name: "2nd Officer (Second Mate)" },
          { id: "389", name: "3rd Officer (Third Mate)" },
        ]);
        break;
      case "218":
        setNewPositions([
          { id: "390", name: "Junior Officer" },
          { id: "391", name: "Deck Cadet" },
        ]);
        break;
      case "219":
        setNewPositions([
          { id: "392", name: "Bosun" },
          { id: "393", name: "Able Seaman (AB)" },
        ]);
        break;
      case "220":
        setNewPositions([{ id: "394", name: "Bosun" }]);
        break;
      case "221":
        setNewPositions([
          { id: "395", name: "Able Seaman (AB)" },
          { id: "396", name: "Ordinary Seaman (OS)" },
        ]);
        break;
      case "222":
        setNewPositions([
          { id: "397", name: "Captain (Master)" },
          { id: "398", name: "Chief Engineer" },
        ]);
        break;
      case "223":
        setNewPositions([
          { id: "399", name: "Chief Engineer" },
          { id: "400", name: "2nd Engineer" },
        ]);
        break;
      case "224":
        setNewPositions([
          { id: "401", name: "2nd Engineer" },
          { id: "402", name: "3rd Engineer" },
        ]);
        break;
      case "225":
        setNewPositions([
          { id: "403", name: "3rd Engineer" },
          { id: "404", name: "4th Engineer" },
        ]);
        break;
      case "226":
        setNewPositions([
          { id: "405", name: "Second Engineer" },
          { id: "406", name: "Electrical Officer (ETO)" },
        ]);
        break;
      case "227":
        setNewPositions([{ id: "407", name: "Wiper" }]);
        break;
      case "228":
        setNewPositions([{ id: "408", name: "Fitter" }]);
        break;
      case "229":
        setNewPositions([{ id: "409", name: "Cook" }]);
        break;
      case "230":
        setNewPositions([{ id: "410", name: "Welder" }]);
        break;
      case "231":
        setNewPositions([{ id: "411", name: "Messman" }]);
        break;
      case "232":
        setNewPositions([{ id: "412", name: "Motorman" }]);
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
      // Check if the value is numeric and exactly 8 digits
      if (!/^\d{8}$/.test(value)) {
        const fieldErrors = {};
        fieldErrors[name] = "INDoS No. must be exactly 8 digits.";
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
      {successMessage ? "" : <h3>Submit a CV/Resume:</h3>}
      <div className="form-bg mb-5">
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
                      // Allow only numeric input and some control keys
                      if (
                        !(
                          e.key === "Tab" ||
                          e.key === "Backspace" ||
                          e.key === "Delete" ||
                          e.key === "ArrowLeft" ||
                          e.key === "ArrowRight" ||
                          (e.key >= "0" && e.key <= "9")
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
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3">
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
            <h3 className="fs-4">
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

export default ContactForm;
