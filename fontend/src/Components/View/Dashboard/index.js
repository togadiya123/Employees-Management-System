import {useEffect, useState} from "react";
import {Stack, Typography} from "@mui/material";

const Dashboard = () => {

    const [ipAddress, setIpAddress] = useState([]);

    const getUserIP = (onNewIP) => {
        let myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        let pc = new myPeerConnection({
                iceServers: []
            }),
            noop = () => {
            },
            localIPs = {},
            ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g;

        function iterateIP(ip) {
            if (!localIPs[ip]) onNewIP(ip);
            localIPs[ip] = true;
        }

        pc.createDataChannel("");

        pc.createOffer().then(function (sdp) {
            sdp.sdp.split('\n').forEach(function (line) {
                if (line.indexOf('candidate') < 0) return;
                line.match(ipRegex).forEach(iterateIP);
            });
            pc.setLocalDescription(sdp, noop, noop);
        }).catch((reason) => {
            console.log(reason)
        });

        pc.onicecandidate = function (ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
    };

    useEffect(() => {
        getUserIP((ip) => {
            setIpAddress((e) => e.length >= 3 ? [ip] : e.concat(ip))
        });
    }, [])


    return (
        <>
            <Stack>
                {
                    ipAddress.map((eachIp, i) => {
                        return (
                            <Stack key={i}>
                                <Typography>
                                    {`${i+1}) :  ${eachIp}`}
                                </Typography>
                            </Stack>
                        )
                    })
                }
            </Stack>
        </>
    );
};

export default Dashboard;