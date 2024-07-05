"use client";
import React, { useState, useCallback, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';

export default function Form6({oncontinue}) {
  const [useVideoLink, setUseVideoLink] = useState(false);
  const [videoLink, setVideoLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);
  const [showWebcam, setShowWebcam] = useState(false);

  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);

  const handleStartCaptureClick = useCallback(() => {
    setShowWebcam(true);
  }, []);

  useEffect(() => {
    if (showWebcam && webcamRef.current && webcamRef.current.video.readyState === 4) {
      setCapturing(true);
      const stream = webcamRef.current.stream;
      mediaRecorderRef.current = new MediaRecorder(stream, {
        mimeType: 'video/webm',
      });
      mediaRecorderRef.current.addEventListener('dataavailable', handleDataAvailable);
      mediaRecorderRef.current.start();
    }
    return () => {
      if (mediaRecorderRef.current) {
        mediaRecorderRef.current.removeEventListener('dataavailable', handleDataAvailable);
      }
    };
  }, [showWebcam, webcamRef.current?.video.readyState]);

  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  const handleStopCaptureClick = useCallback(() => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      mediaRecorderRef.current.removeEventListener('dataavailable', handleDataAvailable);
    }
    setCapturing(false);
  }, []);

  const handleDownload = useCallback(() => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: 'video/webm',
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style = 'display: none';
      a.href = url;
      a.download = 'react-webcam-stream-capture.webm';
      a.click();
      window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  const handleLinkChange = (event) => {
    setVideoLink(event.target.value);
  };

  const handleThumbnailChange = (event) => {
    setThumbnail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Video Link:', videoLink);
    console.log('Thumbnail:', thumbnail);
  };

  return (
      <div>
      <div className="bg-white p-8 rounded-lg w-full max-w-4xl mt-4">
        <h1 className="text-2xl font-bold mb-6">Video Introduction</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <p className="text-lg">Add a horizontal video of up to 2 minutes</p>
            <p className="text-sm text-gray-600">Introduce yourself to students in the same language as your written description. If you teach a different language, include a short sample.</p>
          </div>

          <div className="mb-6">
            <p className="text-sm text-gray-600 mb-2">Have a pre-recorded video on YouTube or Vimeo?</p>
            <input type="text" className="block w-full" placeholder="https://www.youtube.com/watch?v=example" value={videoLink} onChange={handleLinkChange} />
          </div>
          
          <div className="flex flex-col md:flex-row justify-between mb-6">
            <div className="flex-1 mb-6 md:mb-0">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Your video will appear here</label>
                {showWebcam && (
                  <div className="mt-2">
                    <Webcam
                      audio={true}
                      ref={webcamRef}
                      videoConstraints={{
                        facingMode: "user"
                      }}
                      className="w-full h-64"
                    />
                  </div>
                )}
                {capturing ? (
                  <button
                    type="button"
                    className="mt-4 text-red-500"
                    onClick={handleStopCaptureClick}
                  >
                    Stop Capture
                  </button>
                ) : (
                  <button
                    type="button"
                    className="mt-4 text-blue-500"
                    onClick={handleStartCaptureClick}
                  >
                    Start Capture
                  </button>
                )}
                {recordedChunks.length > 0 && (
                  <button
                    type="button"
                    className="mt-4 text-green-500"
                    onClick={handleDownload}
                  >
                    Download
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex-1 ml-0 md:ml-6">
              <h2 className="text-lg font-semibold mb-4">Video Requirements</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Your video should be between 30 seconds and 2 minutes long.</li>
                <li>Record in horizontal mode and at eye level.</li>
                <li>Use good lighting and a neutral background.</li>
                <li>Use a stable surface so that your video does not appear shaky.</li>
                <li>Make sure your face and eyes are fully visible (except for religious reasons).</li>
                <li>Highlight your teaching experience and any relevant teaching certification(s).</li>
                <li>Greet your students warmly and invite them to book a lesson.</li>
              </ul>
              <h2 className="text-lg font-semibold mt-6 mb-4">Don't</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Include your surname or any contact details.</li>
                <li>Include logos or links.</li>
                <li>Use slideshows or presentations.</li>
                <li>Have any other people visible in your video.</li>
              </ul>
            </div>
          </div>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Add a thumbnail (optional)</label>
            <input type="text" className="mt-2 block w-full" placeholder="https://example.com/thumbnail.jpg" value={thumbnail} onChange={handleThumbnailChange} />
            <p className="text-sm text-gray-600 mt-2">Don’t worry if you don’t have a thumbnail ready, we’ll use the preview above.</p>
          </div>

          <button
            type="button"
            onClick={oncontinue}
            className="w-full bg-orange-600 hover:bg-orange-400 text-white py-2 rounded mt-7"
          >
            Save and Continue
          </button>
        </form>
      </div>
    </div>
  );
}
