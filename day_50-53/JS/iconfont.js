(function (window) {
    var svgSprite = '<svg><symbol id="icon-liyi" viewBox="0 0 1024 1024"><path d="M754.6 933.3c-30.4 0-164-57.9-191.1-77.7-1.4-1-2.5-2.5-3.1-4h-96.1c-0.6 1.6-1.7 3-3.1 4-27.1 19.9-160.7 77.7-191.1 77.7h-1.5c-11.5-0.7-17-14.5-20.6-26.5-8.8-29.8-14.1-87.1-13-139.3 1-45.1 6.7-102.2 28.8-118.3 6.3-4.6 14.6-6.9 24.6-6.9 50.8 0 144.8 60.7 172.4 79.4 1 0.7 1.8 1.5 2.4 2.4h98c0.6-0.9 1.5-1.8 2.4-2.4 27.6-18.6 121.6-79.4 172.4-79.4 10.1 0 18.4 2.3 24.6 6.9 22.1 16.1 27.8 73.3 28.8 118.3 1.1 52.3-4.2 109.6-13 139.3-3.5 12-9.1 25.8-20.6 26.5h-1.2z" fill="#F7D7FF" ></path><path d="M736.2 651.1c7.8 0 14.4 1.6 19.3 5.2 40.3 29.4 26.3 266.4 0 267.9h-0.9c-26.5 0-158.4-55.9-185.8-76v-33.1l98.4 17.4-98.4-30.3v-29.3l98.4-30.3-98.4 17.4v-31c22.4-15.2 118.3-77.9 167.4-77.9m-447.7 0c49 0 145 62.7 167.4 77.8v31.2l-98.4-17.4 98.4 30.3v29.3l-98.4 30.3 98.4-17.4v33.1c-27.4 20.1-159.3 76-185.8 76h-0.9c-26.3-1.5-40.3-238.5 0-267.9 4.9-3.7 11.5-5.3 19.3-5.3m272 81.8v109.7h-96.4V732.9h96.4m175.7-99.8c-24.1 0-57.6 11.6-102.1 35.4-33.6 18-63.9 37.8-75.3 45.5l-1.2 0.9h-90.4l-1.2-0.9c-11.4-7.7-41.7-27.6-75.3-45.5-44.6-23.8-78-35.4-102.1-35.4-12 0-22.1 2.9-29.9 8.7-11.9 8.7-19.9 25.1-25.4 51.7-4 19.7-6.5 45.2-7.1 73.7-1.1 53.9 4.2 111 13.4 142.1 2.3 7.9 4.9 14 7.7 18.8 6.7 11.1 15.1 13.8 20.9 14.2 0.6 0 1.3 0.1 2 0.1 5.3 0 15.5-1 42.1-10 16.3-5.5 36.1-13 57.4-21.8 34-14.1 79.9-35.1 97-47.6 0.9-0.7 1.8-1.5 2.6-2.3h86.4c0.8 0.8 1.6 1.6 2.6 2.3 17.1 12.5 62.9 33.5 97 47.6 21.2 8.8 41.1 16.4 57.4 21.8 26.6 9 36.8 10 42.1 10 0.7 0 1.4 0 2-0.1 5.8-0.3 14.2-3.1 20.9-14.2 2.9-4.8 5.4-10.9 7.7-18.8 9.1-31.1 14.5-88.2 13.4-142.1-0.6-28.5-3.1-54-7.1-73.7-5.4-26.6-13.5-43.1-25.4-51.7-8-5.8-18.1-8.7-30.1-8.7z" fill="#330867" ></path><path d="M512.3 534.9c-112.3 0-217.9-7.1-297.4-20-39-6.3-69.8-13.7-91.5-22-26-10-38.7-21.4-38.7-34.8 0-12.9 11.5-23.8 35.2-33.5 18.4-7.5 44.3-14.3 77-20.3 9-44.1 30.7-118.8 56.9-182.9 15.3-37.4 30.4-67.3 44.9-88.7 18.5-27.4 35.7-40.7 52.6-40.7 2 0 4 0.2 6 0.6 27.5 5.5 77.6 27.2 114.7 44.5 12.7 5.9 26.3 8.9 40.3 8.9 14 0 27.6-3 40.3-8.9 37.1-17.3 87.2-39 114.7-44.5 2-0.4 4-0.6 6-0.6 16.9 0 34.1 13.3 52.6 40.7 14.5 21.4 29.6 51.3 44.9 88.7 26.2 64.2 48 138.8 56.9 182.9 32.7 6 58.5 12.8 77 20.3 23.7 9.6 35.2 20.6 35.2 33.5 0 13.5-12.6 24.8-38.7 34.8-21.7 8.3-52.4 15.7-91.5 22-79.5 12.9-185.1 20-297.4 20z" fill="#FFE08A" ></path><path d="M673.3 101c57.9 0 130.8 226.4 146.7 311.1 68.8 12.1 110.8 28.2 110.8 46 0 37.5-187.4 67.9-418.5 67.9S93.8 495.6 93.8 458.1c0-17.7 42-33.9 110.8-46 16-84.7 88.9-311.1 146.7-311.1 1.4 0 2.9 0.1 4.3 0.4 26.7 5.3 76.2 26.9 112.7 43.9 14 6.5 29 9.8 44.1 9.8 15 0 30.1-3.3 44.1-9.8 36.4-17 85.9-38.5 112.7-43.9 1.3-0.2 2.7-0.4 4.1-0.4m-322-18c-20.1 0-39.7 14.6-60 44.6-14.8 21.9-30.2 52.3-45.7 90.3-25.3 61.9-46.4 133.5-56.2 178.6-30.5 5.8-54.9 12.5-72.8 19.7-11.5 4.7-20.3 9.6-26.8 15-11.6 9.7-14.1 19.9-14.1 26.8 0 7.1 2.7 17.7 15.3 27.8 7 5.6 16.6 10.6 29.1 15.4 22.2 8.5 53.6 16.1 93.3 22.5 80 13 186.1 20.1 298.8 20.1s218.9-7.1 298.8-20.1c39.7-6.4 71-14 93.3-22.5 12.6-4.8 22.1-9.9 29.1-15.4 12.7-10 15.3-20.6 15.3-27.8 0-6.8-2.4-17-14.1-26.8-6.5-5.4-15.2-10.3-26.8-15-17.9-7.3-42.3-13.9-72.8-19.7-9.7-45.1-30.9-116.7-56.2-178.6-15.5-38-30.9-68.4-45.7-90.3-20.3-30-39.9-44.6-60-44.6-2.6 0-5.2 0.3-7.8 0.8-22.8 4.6-62.1 19.8-116.7 45.2-11.5 5.4-23.8 8.1-36.5 8.1s-25-2.7-36.5-8.1c-54.6-25.4-93.9-40.6-116.7-45.2-2.3-0.5-4.9-0.8-7.6-0.8z" fill="#330867" ></path><path d="M820 412.1c0 69.9-615.4 77.4-615.4 0-68.8 12.1-110.8 28.2-110.8 46 0 37.5 187.4 67.9 418.5 67.9s418.5-30.4 418.5-67.9c0.1-17.8-42-33.9-110.8-46z" fill="#EAB236" ></path><path d="M513.6 432.5c-107.5 0-213.8-9.7-316-28.8-1.6-0.3-2.7-1.9-2.4-3.5 0.3-1.6 1.9-2.7 3.5-2.4 206 38.5 423.9 38.5 629.9 0 1.6-0.3 3.2 0.8 3.5 2.4 0.3 1.6-0.8 3.2-2.4 3.5-102.3 19.1-208.6 28.8-316.1 28.8z" fill="#330867" ></path></symbol><symbol id="icon-kaoyan" viewBox="0 0 1024 1024"><path d="M509.4 916.2c-54.8 0-108-10.7-158.1-31.9-48.4-20.5-91.8-49.8-129.1-87.1s-66.6-80.7-87.1-129.1c-21.2-50.1-32-103.3-32-158.1s10.7-108 31.9-158.1c20.5-48.4 49.7-91.8 87.1-129.1 37.3-37.3 80.7-66.6 129.1-87.1 50.1-21.2 103.3-31.9 158.1-31.9s108 10.7 158.1 31.9c48.4 20.5 91.8 49.7 129.1 87.1 37.3 37.3 66.6 80.7 87.1 129.1 21.2 50.1 31.9 103.3 31.9 158.1s-10.7 108-31.9 158.1c-20.5 48.4-49.8 91.8-87.1 129.1s-80.7 66.6-129.1 87.1c-50 21.2-103.2 31.9-158 31.9z" fill="#F7D7FF" ></path><path d="M509.4 112.7c219.4 0 397.2 177.8 397.2 397.2S728.7 907.2 509.4 907.2 112.1 729.3 112.1 510 290 112.7 509.4 112.7m0-18c-56 0-110.4 11-161.6 32.6-49.4 20.9-93.9 50.9-132 89-38.1 38.1-68.1 82.5-89 132-21.7 51.2-32.7 105.6-32.7 161.7s11 110.4 32.6 161.6c20.9 49.4 50.9 93.9 89 132 38.1 38.1 82.5 68.1 132 89 51.2 21.7 105.6 32.6 161.6 32.6s110.4-11 161.6-32.6c49.4-20.9 93.9-50.9 132-89 38.1-38.1 68.1-82.5 89-132 21.7-51.2 32.6-105.6 32.6-161.6s-11-110.4-32.6-161.6c-20.9-49.4-50.9-93.9-89-132-38.1-38.1-82.5-68.1-132-89-51.1-21.7-105.5-32.7-161.5-32.7z" fill="#330867" ></path><path d="M877.5 659.4c-59.1 145.3-201.6 247.8-368.1 247.8-166.5 0-309.1-102.5-368.1-247.8-9.5-23.3 179.3-132.6 368-128 185.1 4.5 370.4 122.7 368.2 128z" fill="#F0BEFC" ></path><path d="M509.4 358.8c-1.4 0-2.8-0.3-4.1-1L304.6 256c-3-1.5-4.9-4.6-4.9-8s1.9-6.5 4.9-8l200.7-101.8c1.3-0.6 2.7-1 4.1-1s2.8 0.3 4.1 1L714.2 240c3 1.5 4.9 4.6 4.9 8s-1.9 6.5-4.9 8L513.4 357.8c-1.2 0.6-2.6 1-4 1z" fill="#330867" ></path><path d="M509.4 146.1l200.7 101.8-200.7 101.9-200.7-101.9 200.7-101.8m0-18c-2.8 0-5.6 0.6-8.1 1.9L300.5 231.9c-6 3.1-9.9 9.3-9.9 16.1s3.8 13 9.9 16.1l200.7 101.8c2.6 1.3 5.4 1.9 8.1 1.9 2.8 0 5.6-0.6 8.1-1.9L718.2 264c6-3.1 9.9-9.3 9.9-16.1s-3.8-13-9.9-16.1L517.5 130.1c-2.5-1.3-5.3-2-8.1-2z" fill="#330867" ></path><path d="M261.7 799.8c-5 0-9-4-9-9v-93.7c0-98.2 79.9-178.1 178.1-178.1h157.1c98.2 0 178.1 79.9 178.1 178.1v93.7c0 5-4 9-9 9H261.7z" fill="#66C1FF" ></path><path d="M587.9 528c93.4 0 169.1 75.7 169.1 169.1v93.7H261.7v-93.7c0-93.4 75.7-169.1 169.1-169.1h157.1m0-18H430.8c-25.3 0-49.8 5-72.8 14.7-22.3 9.4-42.3 22.9-59.5 40.1-17.2 17.2-30.7 37.2-40.1 59.5-9.8 23.1-14.7 47.6-14.7 72.8v93.7c0 9.9 8.1 18 18 18H757c9.9 0 18-8.1 18-18v-93.7c0-25.3-5-49.8-14.7-72.8-9.4-22.3-22.9-42.3-40.1-59.5-17.2-17.2-37.2-30.7-59.5-40.1-23-9.7-47.5-14.7-72.8-14.7z" fill="#330867" ></path><path d="M261.7 748.5H757v42.4H261.7z" fill="#18A3D3" ></path><path d="M509.4 641.7c-1.9 0-3.7-0.6-5.3-1.7l-70.6-51.3c-2.3-1.7-3.7-4.4-3.7-7.3V440.1c0-5 4-9 9-9H580c5 0 9 4 9 9v141.3c0 2.9-1.4 5.6-3.7 7.3L514.7 640c-1.6 1.1-3.5 1.7-5.3 1.7z" fill="#FFE08A" ></path><path d="M580 440.1v141.3l-70.6 51.3-70.6-51.3V440.1H580m0-18H438.7c-9.9 0-18 8.1-18 18v141.3c0 5.8 2.8 11.2 7.4 14.6l70.6 51.3c3.2 2.3 6.9 3.4 10.6 3.4s7.4-1.1 10.6-3.4l70.6-51.3c4.7-3.4 7.4-8.8 7.4-14.6V440.1c0.1-10-8-18-17.9-18z" fill="#330867" ></path><path d="M509.4 498.9c-64.3 0-116.6-52.3-116.6-116.6v-94.8c0-5 4-9 9-9H617c5 0 9 4 9 9v94.8c0 64.3-52.3 116.6-116.6 116.6z" fill="#FFE08A" ></path><path d="M617 287.5v94.8c0 59.4-48.2 107.6-107.6 107.6-59.4 0-107.6-48.2-107.6-107.6v-94.8H617m0-18H401.8c-9.9 0-18 8.1-18 18v94.8c0 33.5 13.1 65.1 36.8 88.8s55.3 36.8 88.8 36.8 65.1-13.1 88.8-36.8 36.8-55.3 36.8-88.8v-94.8c0-10-8.1-18-18-18z" fill="#330867" ></path><path d="M645.7 325.7c-0.6 0-1.1-0.1-1.7-0.2-44.3-8.4-89.5-12.7-134.6-12.7s-90.3 4.3-134.6 12.7c-0.6 0.1-1.1 0.2-1.7 0.2-1.8 0-3.6-0.5-5.1-1.6-2-1.3-3.3-3.4-3.8-5.8l-10.5-54.9c-0.4-2.3 0.1-4.8 1.4-6.7 1.3-2 3.4-3.3 5.8-3.8 48.8-9.3 98.8-14 148.4-14s99.6 4.7 148.4 14c2.3 0.4 4.4 1.8 5.8 3.8 1.3 2 1.8 4.4 1.4 6.7l-10.5 54.9c-0.4 2.3-1.8 4.4-3.8 5.8-1.4 1.1-3.2 1.6-4.9 1.6z" fill="#F0BEFC" ></path><path d="M509.4 248c49.1 0 98.3 4.6 146.8 13.9l-10.5 54.9c-45-8.6-90.7-12.9-136.3-12.9s-91.3 4.3-136.3 12.9l-10.5-54.9c48.5-9.3 97.6-13.9 146.8-13.9m0-18c-50.3 0-100.8 4.8-150.1 14.2-9.8 1.9-16.2 11.3-14.3 21.1l10.5 54.9c1.6 8.6 9.2 14.6 17.7 14.6 1.1 0 2.3-0.1 3.4-0.3 43.7-8.3 88.4-12.6 132.9-12.6s89.2 4.2 132.9 12.6c1.1 0.2 2.3 0.3 3.4 0.3 8.5 0 16-6 17.7-14.6l10.5-54.9c1.9-9.8-4.5-19.2-14.3-21.1-49.6-9.5-100.1-14.2-150.3-14.2z" fill="#330867" ></path><path d="M530.1 434.2h-41.4c-5 0-9-4-9-9s4-9 9-9h41.4c5 0 9 4 9 9s-4.1 9-9 9z" fill="#330867" ></path></symbol><symbol id="icon-zixi" viewBox="0 0 1024 1024"><path d="M513.2 213.7m-105 0a105 105 0 1 0 210 0 105 105 0 1 0-210 0Z" fill="#F7D7FF" ></path><path d="M513.2 117.7c53 0 96 43 96 96s-43 96-96 96-96-43-96-96 42.9-96 96-96m0-18c-30.5 0-59.1 11.9-80.6 33.4s-33.4 50.2-33.4 80.6 11.9 59.1 33.4 80.6c21.5 21.5 50.2 33.4 80.6 33.4s59.1-11.9 80.6-33.4c21.5-21.5 33.4-50.2 33.4-80.6s-11.9-59.1-33.4-80.6-50.2-33.4-80.6-33.4z" fill="#330867" ></path><path d="M609.2 213.7c0 53-43 96-96 96s-96-43-96-96c21.7 37.3 43 69.3 96 69.3s57.6-25.4 96-69.3z" fill="#F0BEFC" ></path><path d="M438 916.9c-23.5 0-42.7-19.1-42.7-42.7V628.5c0-9.6 7.8-17.4 17.4-17.4h50.6c9.6 0 17.4 7.8 17.4 17.4v245.8c0 23.5-19.2 42.6-42.7 42.6z" fill="#EAB236" ></path><path d="M463.3 620.1c4.6 0 8.4 3.7 8.4 8.4v245.8c0 18.6-15.1 33.7-33.7 33.7s-33.7-15.1-33.7-33.7V628.5c0-4.6 3.7-8.4 8.4-8.4h50.6m0-18h-50.6c-14.5 0-26.4 11.8-26.4 26.4v245.8c0 28.5 23.2 51.7 51.7 51.7s51.7-23.2 51.7-51.7V628.5c0-14.6-11.9-26.4-26.4-26.4z" fill="#330867" ></path><path d="M588.3 916.9c-23.5 0-42.7-19.1-42.7-42.7V628.5c0-9.6 7.8-17.4 17.4-17.4h50.6c9.6 0 17.4 7.8 17.4 17.4v245.8c0 23.5-19.2 42.6-42.7 42.6z" fill="#EAB236" ></path><path d="M613.6 620.1c4.6 0 8.4 3.7 8.4 8.4v245.8c0 18.6-15.1 33.7-33.7 33.7s-33.7-15.1-33.7-33.7V628.5c0-4.6 3.7-8.4 8.4-8.4h50.6m0-18H563c-14.5 0-26.4 11.8-26.4 26.4v245.8c0 28.5 23.2 51.7 51.7 51.7 28.5 0 51.7-23.2 51.7-51.7V628.5c0-14.6-11.8-26.4-26.4-26.4z" fill="#330867" ></path><path d="M211.2 916.9c-5 0-9-4-9-9V642.8c0-5 4-9 9-9h19.5c5 0 9 4 9 9V908c0 5-4 9-9 9h-19.5z" fill="#DD365E" ></path><path d="M230.7 642.8V908h-19.5V642.8h19.5m0-18h-19.5c-9.9 0-18 8.1-18 18V908c0 9.9 8.1 18 18 18h19.5c9.9 0 18-8.1 18-18V642.8c0-10-8-18-18-18z" fill="#330867" ></path><path d="M795.6 916.9c-5 0-9-4-9-9V642.8c0-5 4-9 9-9h19.5c5 0 9 4 9 9V908c0 5-4 9-9 9h-19.5z" fill="#DD365E" ></path><path d="M815.1 642.8V908h-19.5V642.8h19.5m0-18h-19.5c-9.9 0-18 8.1-18 18V908c0 9.9 8.1 18 18 18h19.5c9.9 0 18-8.1 18-18V642.8c0-10-8.1-18-18-18z" fill="#330867" ></path><path d="M380.1 628.1c-5 0-9-4-9-9v-159l-65.5 65.5c-8.7 8.7-20.2 13.5-32.5 13.5s-23.8-4.8-32.5-13.5-13.5-20.2-13.5-32.5 4.8-23.8 13.5-32.5l124.7-124.7c1.8-1.8 3.8-3.5 5.8-4.9 0.1-4.8 4.1-8.7 9-8.7h270.8c5 0 9 4 9 9v3.4c0.4 0.4 0.9 0.8 1.3 1.2l124.7 124.7c8.7 8.7 13.5 20.2 13.5 32.5s-4.8 23.8-13.5 32.5-20.2 13.5-32.5 13.5-23.8-4.8-32.5-13.5l-61-61V619c0 5-4 9-9 9H380.1z" fill="#FFE08A" ></path><path d="M650.8 331.3v7.6c1.4 1 2.7 2.2 3.9 3.4L779.4 467c14.4 14.4 14.4 37.9 0 52.3-7.2 7.2-16.7 10.8-26.1 10.8s-18.9-3.6-26.1-10.8L650.8 443v176.1H380.1V438.4l-80.9 80.9c-7.2 7.2-16.7 10.8-26.1 10.8-9.5 0-18.9-3.6-26.1-10.8-14.4-14.4-14.4-37.9 0-52.3l124.7-124.7c2.6-2.6 5.4-4.7 8.5-6.3v-4.7h270.6m0-18H380.1c-8.1 0-14.9 5.3-17.2 12.7-1.4 1.1-2.7 2.4-4 3.6L234.1 454.3c-21.4 21.4-21.4 56.3 0 77.8 10.4 10.4 24.2 16.1 38.9 16.1s28.5-5.7 38.9-16.1l50.2-50.2v137.2c0 9.9 8.1 18 18 18h270.8c9.9 0 18-8.1 18-18V486.4l45.6 45.6c10.4 10.4 24.2 16.1 38.9 16.1s28.5-5.7 38.9-16.1c21.4-21.4 21.4-56.3 0-77.8L668.8 330.9c-0.2-9.8-8.2-17.6-18-17.6z" fill="#330867" ></path><path d="M507.5 616.6c-1.1 0-2.2-0.2-3.2-0.6L367 562.8c-3.5-1.3-5.8-4.7-5.8-8.4v-163c0-3 1.5-5.7 3.9-7.4 1.5-1 3.3-1.6 5.1-1.6 1.1 0 2.2 0.2 3.2 0.6l137.3 53.2c3.5 1.3 5.8 4.7 5.8 8.4v163c0 3-1.5 5.7-3.9 7.4-1.5 1.1-3.3 1.6-5.1 1.6z" fill="#66C1FF" ></path><path d="M370.2 391.5l137.3 53.2v163l-137.3-53.2v-163m0-18c-3.6 0-7.1 1.1-10.2 3.2-4.9 3.4-7.8 8.9-7.8 14.8v163c0 7.4 4.6 14.1 11.5 16.8L501 624.4c2.1 0.8 4.3 1.2 6.5 1.2 3.6 0 7.1-1.1 10.2-3.2 4.9-3.4 7.8-8.9 7.8-14.8v-163c0-7.4-4.6-14.1-11.5-16.8l-137.3-53.2c-2.1-0.7-4.4-1.1-6.5-1.1z" fill="#330867" ></path><path d="M518.8 616.6c-1.8 0-3.6-0.5-5.1-1.6-2.4-1.7-3.9-4.5-3.9-7.4v-163c0-3.7 2.3-7.1 5.8-8.4L652.9 383c1.1-0.4 2.2-0.6 3.2-0.6 1.8 0 3.6 0.5 5.1 1.6 2.4 1.7 3.9 4.5 3.9 7.4v163c0 3.7-2.3 7.1-5.8 8.4L522.1 616c-1.1 0.4-2.2 0.6-3.3 0.6z" fill="#66C1FF" ></path><path d="M656.2 391.5v163l-137.3 53.2v-163l137.3-53.2m0-18c-2.2 0-4.4 0.4-6.5 1.2l-137.3 53.2c-6.9 2.7-11.5 9.4-11.5 16.8v163c0 5.9 2.9 11.5 7.8 14.8 3 2.1 6.6 3.2 10.2 3.2 2.2 0 4.4-0.4 6.5-1.2l137.3-53.2c6.9-2.7 11.5-9.4 11.5-16.8v-163c0-5.9-2.9-11.5-7.8-14.8-3.1-2.1-6.7-3.2-10.2-3.2z" fill="#330867" ></path><path d="M128.2 672.5c-5 0-9-4-9-9v-28c0-5 4-9 9-9h770c5 0 9 4 9 9v28c0 5-4 9-9 9h-770z" fill="#FC6B79" ></path><path d="M898.2 635.5v28h-770v-28h770m0-18h-770c-9.9 0-18 8.1-18 18v28c0 9.9 8.1 18 18 18h770c9.9 0 18-8.1 18-18v-28c0-9.9-8.1-18-18-18z" fill="#330867" ></path><path d="M272.6 535.6c-22.7 0-41.8-16.3-45.4-38.8-1.9-12.1 1-24.3 8.2-34.2s17.9-16.5 30-18.4L391 424.4c2.4-0.4 4.8-0.6 7.2-0.6 22.7 0 41.8 16.3 45.4 38.8 1.9 12.1-1 24.3-8.2 34.2-7.2 9.9-17.9 16.5-30 18.4L279.9 535c-2.5 0.4-4.9 0.6-7.3 0.6z" fill="#FFE08A" ></path><path d="M398.2 432.8c17.9 0 33.6 13 36.5 31.2 3.2 20.2-10.6 39.1-30.8 42.3l-125.5 19.8c-2 0.3-3.9 0.5-5.8 0.5-17.9 0-33.6-13-36.5-31.2-3.2-20.2 10.6-39.1 30.8-42.3l125.5-19.8c1.9-0.3 3.9-0.5 5.8-0.5m0-18c-2.9 0-5.8 0.2-8.6 0.7L264 435.3c-14.5 2.3-27.3 10.1-35.9 22-8.6 11.9-12.1 26.4-9.8 40.9 2.1 13 8.7 24.9 18.8 33.4 9.9 8.4 22.5 13 35.5 13 2.9 0 5.8-0.2 8.6-0.7l125.5-19.8c14.5-2.3 27.3-10.1 35.9-22 8.6-11.9 12.1-26.4 9.8-40.9-2.1-13-8.7-24.9-18.8-33.4-9.9-8.3-22.5-13-35.4-13z" fill="#330867" ></path><path d="M753.7 535.6c-2.4 0-4.8-0.2-7.2-0.6L621 515.2c-12.1-1.9-22.8-8.4-30-18.4s-10.1-22.1-8.2-34.2c3.6-22.5 22.6-38.8 45.4-38.8 2.4 0 4.8 0.2 7.2 0.6l125.5 19.8c12.1 1.9 22.8 8.4 30 18.4s10.1 22.1 8.2 34.2c-3.5 22.5-22.6 38.8-45.4 38.8z" fill="#FFE08A" ></path><path d="M628.1 432.8c1.9 0 3.9 0.1 5.8 0.5l125.5 19.8c20.2 3.2 33.9 22.1 30.8 42.3-2.9 18.2-18.6 31.2-36.5 31.2-1.9 0-3.9-0.1-5.8-0.5l-125.5-19.8c-20.2-3.2-33.9-22.1-30.8-42.3 2.9-18.2 18.7-31.2 36.5-31.2m0-18c-13 0-25.6 4.6-35.5 13-10 8.5-16.7 20.4-18.8 33.4-4.7 29.9 15.8 58.2 45.7 62.9L745 543.9c2.9 0.5 5.8 0.7 8.6 0.7 13 0 25.6-4.6 35.5-13 10-8.5 16.7-20.4 18.8-33.4 2.3-14.5-1.2-29-9.8-40.9-8.6-11.9-21.4-19.7-35.9-22l-125.5-19.8c-2.8-0.4-5.7-0.7-8.6-0.7z" fill="#330867" ></path></symbol><symbol id="icon-kongcheng" viewBox="0 0 1024 1024"><path d="M396.2 483.5h237.1V738H396.2z" fill="#330867" ></path><path d="M281 915.9c-5 0-9-4-9-9v-153c0-68.6 55.8-124.4 124.4-124.4H633c68.6 0 124.4 55.8 124.4 124.4v153c0 5-4 9-9 9H281z" fill="#66C1FF" ></path><path d="M633 638.4c63.7 0 115.4 51.7 115.4 115.4v153H281v-153c0-63.7 51.7-115.4 115.4-115.4H633m0-18H396.4c-35.6 0-69.1 13.9-94.3 39.1-25.2 25.2-39.1 58.7-39.1 94.3v153c0 9.9 8.1 18 18 18h467.4c9.9 0 18-8.1 18-18v-153c0-35.6-13.9-69.1-39.1-94.3-25.1-25.2-58.6-39.1-94.3-39.1z" fill="#330867" ></path><path d="M281.1 868.2h467.3v38.7H281.1z" fill="#18A3D3" ></path><path d="M573.6 638.7l-58.9 106.6-58.8-106.6V490.9h117.7z" fill="#EAB236" ></path><path d="M587 307.8l-72.2-6.2-72.2 6.2c-1.5 0.9-121.4 161.5 0 256.3 28.7 24.2 32.6 38.5 72.2 39.8 39.7-1.2 43.6-15.5 72.2-39.8 121.3-94.7 1.5-255.4 0-256.3z" fill="#FFE08A" ></path><path d="M690.8 642.6c-29.2-100.9-9.9-110.7-0.6-250.8C699.5 251.7 593 211 514.7 211s-184.8 40.7-175.5 180.8c9.3 140.1 28.6 150-0.6 250.8-29.2 100.9 0 94.9 0 94.9l69.9 43.2c8.9 5.5 20.5-1.1 19.9-11.4-2.6-44.4-29.3-136.7-24.9-174.8 4.3-36.9-7.4-186.6-7.4-186.6s57.9-5 100.7-33.9c48.3-32.6 38.4-71.2 44.1-70.1 138 25.1 67.9 220.6 63.9 283-2.2 35.1-1.3 137.9-3.8 182.4-0.6 10.3 11 16.9 19.9 11.4l69.9-43.2s29.2 6 0-94.9z" fill="#330867" ></path><path d="M573 738.7c-0.5-0.4-1.2-0.7-1.9-0.7h-0.2l-51 3.8 53.6-102 30.2 123.7-30.7-24.8z" fill="#F7D7FF" ></path><path d="M572.4 648.3l26.2 107.3-23.7-19.2c-1.1-0.9-2.4-1.3-3.8-1.3h-0.4l-45.6 3.4 47.3-90.2m2.1-16.9l-59.8 113.8 56.4-4.2 37.6 30.4-34.2-140z" fill="#330867" ></path><path d="M456 639.9l53.6 102-51-3.8h-0.2c-0.7 0-1.4 0.2-1.9 0.7l-30.6 24.8L456 639.9z" fill="#F7D7FF" ></path><path d="M457 648.3l47.4 90.2-45.6-3.4h-0.4c-1.4 0-2.7 0.5-3.8 1.3l-23.7 19.2L457 648.3m-2-16.9l-34.1 140 37.6-30.4 56.4 4.2L455 631.4z" fill="#330867" ></path><path d="M520.6 291.6c-1.6 0-3.6 0-5.9-0.1-2.3 0.1-4.2 0.1-5.9 0.1-0.5 0-1-0.1-1.5-0.4-18-0.9-91.7-5.9-112.5-27.4-0.5-0.5-0.8-1.1-0.8-1.8-4.5-46.8 9.4-86.3 21.9-111.2 13.3-26.5 29.6-45.5 35-46.9 0.3-0.1 0.7-0.1 1.1-0.1 6.1 0 51 18.3 62.7 23.1 11.7-4.8 56.6-23.1 62.8-23.1 0.4 0 0.7 0 1.1 0.1 5.3 1.4 21.6 20.4 35 46.9 12.5 24.9 26.4 64.3 21.9 111.2-0.1 0.7-0.4 1.3-0.8 1.8-20.8 21.5-94.5 26.5-112.5 27.4-0.6 0.3-1.1 0.4-1.6 0.4z" fill="#66C1FF" ></path><path d="M577.5 106.7h0.3c6.8 1.8 63.1 67.6 54.6 154.9-18 18.6-81.2 25.2-111.8 26.6v0.3c-1.6 0-3.6 0-5.9-0.1-2.2 0.1-4.2 0.1-5.9 0.1v-0.3c-30.6-1.4-93.8-8-111.8-26.6-8.5-87.3 47.8-153.1 54.6-154.9h0.3c6.1 0 62.7 23.4 62.7 23.4s56.8-23.4 62.9-23.4m-125.5-6c-0.7 0-1.3 0.1-1.8 0.2-3.5 0.9-8.8 5.9-15.8 14.8-5.3 6.7-13.2 18-21.1 33.7-12.7 25.2-26.8 65.2-22.2 112.8 0.1 1.4 0.7 2.6 1.7 3.6 8.8 9.1 27.1 16.3 54.4 21.5 24.3 4.6 48.5 6.3 59.5 6.8 0.7 0.3 1.5 0.4 2.2 0.4 1.6 0 3.6 0 5.9-0.1 2.3 0.1 4.2 0.1 5.9 0.1 0.8 0 1.5-0.1 2.2-0.4 11-0.6 35.3-2.3 59.5-6.8 27.3-5.2 45.6-12.4 54.4-21.5 0.9-1 1.5-2.2 1.7-3.6 4.6-47.6-9.5-87.6-22.2-112.8-7.9-15.7-15.8-27-21.1-33.7-7-8.9-12.3-13.9-15.8-14.8-0.6-0.2-1.2-0.2-1.8-0.2-1.8 0-4.9 0-35.8 12.1-11.3 4.4-22.3 8.9-26.9 10.8-4.6-1.9-15.6-6.4-26.9-10.8-31.1-12.1-34.2-12.1-36-12.1z" fill="#330867" ></path><path d="M577.8 106.8c-2.9-0.8-35.3 12.1-52.5 19-6.7 2.7-14.4 2.7-21.1 0-17.2-6.9-49.6-19.8-52.5-19-2.6 0.7 38.1 31.2 55.4 44.1 4.5 3.3 10.8 3.3 15.3 0 17.4-12.9 58.2-43.4 55.4-44.1z" fill="#18A3D3" ></path><path d="M514.7 202.9c-5.7 0-11.5-1.5-16.5-4.6l-78.9-48 3.1-5.1 78.9 48c8.1 4.9 18.6 4.9 26.8 0l78.9-48 3.1 5.1-78.9 48c-5 3.1-10.7 4.6-16.5 4.6z" fill="#330867" ></path><path d="M573.6 603.9c-20.5 23.4-98.7 25.3-109.9 3.5-2.6-5.1-5.3-7.3-7.9-7.5V628c0.9 2.2-14.7-0.4-5.2 10.6-6.2 1.9-49.9 16.1-62.5 38.5 0 0 9.9-10.3 34.7-10.3 7.3 0 14.6-0.8 21.4-1.9-4.3 3.6-9 10.5-14.9 23.7-15.7 35.1-33.2 34.6-33.2 34.6s62.2 17.8 71.6-21.8c9.4-39.6 32.4-39.9 32.4-39.9 37 14.6 74.4-30.1 74.4-30.1l-0.9-27.5z" fill="#FC6B79" ></path><path d="M573.6 603.9l0.9 27.5s-37.4 44.7-74.4 30.1c0 0-23 0.3-32.4 39.9-9.4 39.6-71.6 21.8-71.6 21.8s10.9 0.4 23.2-16.8c-5.9 25.1 42 15.4 44.5-29.7 1.3-23.3 17.5-32.2 63.6-31.8 17.6 0.1 46.2-41 46.2-41z" fill="#DD365E" ></path></symbol></svg>';
    var script = function () {
        var scripts = document.getElementsByTagName("script");
        return scripts[scripts.length - 1]
    }();
    var shouldInjectCss = script.getAttribute("data-injectcss");
    var ready = function (fn) {
        if (document.addEventListener) {
            if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
                setTimeout(fn, 0)
            } else {
                var loadFn = function () {
                    document.removeEventListener("DOMContentLoaded", loadFn, false);
                    fn()
                };
                document.addEventListener("DOMContentLoaded", loadFn, false)
            }
        } else if (document.attachEvent) {
            IEContentLoaded(window, fn)
        }

        function IEContentLoaded(w, fn) {
            var d = w.document,
                done = false,
                init = function () {
                    if (!done) {
                        done = true;
                        fn()
                    }
                };
            var polling = function () {
                try {
                    d.documentElement.doScroll("left")
                } catch (e) {
                    setTimeout(polling, 50);
                    return
                }
                init()
            };
            polling();
            d.onreadystatechange = function () {
                if (d.readyState == "complete") {
                    d.onreadystatechange = null;
                    init()
                }
            }
        }
    };
    var before = function (el, target) {
        target.parentNode.insertBefore(el, target)
    };
    var prepend = function (el, target) {
        if (target.firstChild) {
            before(el, target.firstChild)
        } else {
            target.appendChild(el)
        }
    };

    function appendSvg() {
        var div, svg;
        div = document.createElement("div");
        div.innerHTML = svgSprite;
        svgSprite = null;
        svg = div.getElementsByTagName("svg")[0];
        if (svg) {
            svg.setAttribute("aria-hidden", "true");
            svg.style.position = "absolute";
            svg.style.width = 0;
            svg.style.height = 0;
            svg.style.overflow = "hidden";
            prepend(svg, document.body)
        }
    }
    if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
        window.__iconfont__svg__cssinject__ = true;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
        } catch (e) {
            console && console.log(e)
        }
    }
    ready(appendSvg)
})(window)