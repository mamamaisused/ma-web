import React from 'react';
import 'antd/dist/antd.css';
import './home.css';
import jsPDF from 'jspdf';
import {Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Tabs,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
    Rate } from 'antd';
import simheifont from './jspdf/simhei-normal';

const mlcpng = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASQAAABhCAYAAAEIHOwRAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAABsQAAAbEAajXEcQAACgLSURBVHhe7Z35kx61mcftXLDcRzhDslwhMfdyLSQkQCAQ7hACLDcEMAQIR0IgrCGGcINjsLnsGIyxyVatf9wfXEXtD1O7gD3H29c777x9qNU9M0BcFFW7/0Fmn+/TUk93v+fM+ILVp0r1dqvVarX06NEjtV5pnsGwNYns9G51OE/W5HfU4bzQSe5Uhzm1Wu3r6rCFyEn+TR32ZMyOv4tf34pPYY8qiGzx4sVf0cf49R3xp3YPCa2YEzo1NTWfPYjASf6a/co1UwNTX8Mx7h0aau6LY+A78S2BLf+gTucFbvJXPLPjizgDzl6UQ3sigA5UPNZEjlymDilxyXv41WG8keZJkR0vRgL9Tf6hfM2VK/ALJqyJg/FLiVmNXyqF50InXttoTO6D8xLFROhfytLX8av9NMXzYviBgYGvFc8pcddRHH9Bbmh/5MrU+qmvRlG0hw6XXU9X4bxE5KYr1SFTfACgYvqqOsweqJzy6pvAFm8Xc85gMBi+cERu/Lg6JHUfnqgOZ4ysj1+vDruyYUO0E37DoTbP0u0bjtF2Qc3juJ2GLvqFdvK2+r0ptuKTcQ3NCPs5yR3V++l8leOke+GYGuk3dXNTDZc3ETgOnHhJczg5i27gBja04/vwqyneHHnRIcKR96pTvoYH6WNq/d/iC8R0/HINexChk67F79S8aauCCWrxT7LIspyhXPoxzrXjQIp0IN1ZHTKUE7/nXzt5LRqM9ijeBxdY0Q24ruPRvzBh9DElnBPGhF66Th3miHpytTqkwOm76nBe6Cbr9IPIna+850ln8jR12BUtCgaDwWAwbCvIRrpLuPJRdbpjUOwia6h3ywMI1cayXdh2hJ78137CVSGL4oTZ3NeLEL1s9T56cITPlfXTFVgfgSXX4AbX3bwr/CI7OlpHEtryZQ5I4NwfEefgV3m15cMPP9y9UxgyOO9ShzwCxHGSnQdTC344145sx9yMwnlgi8tDO10b1pLcLtT4lniZw6hChKNnnawuM003Ptb3ku/hGEY0bM3YS27mi52gDHgUkeEYv6IxeSQSTqZaPmoE+1Ifj9lj2bgZZVxVwoogbOSkt6rTHPg31RBY4MoVOOcLCh6VUhnAL2vJdxIr+cfIkdfrsDAjq8/WUq9OGZLIdZE9PRYUUbcjS1fm4EeZto6e8SIHaEdoiXuLEdPDb8I4oDplcD2syR/h1/5vez/lzRTvLRI58TPVa9pYp2e8zh4KhNMOL1UUfeEmS6kwfofjyY2T+yAMMgfjivqe2Ilv4cCEtsEDL3kYv006V5dyhJWe0bDEkeqUwSCaOpwbxUHSfqlvqh8Q1ILvq1ODwWAwGAwGg8Fg+CIhvNZ+13YH38tqtdou6jQndMXz6jAndMQd6rAr69evz2dbzATfkpeig6pOtxiBJR/0BqND1Om85kh0PkYP1Gl3Akv8DIlCL1x5Mb4j360m1q/FS+EnbPED5dURhPNH4uPUad/gvthLX1KnWwzEq8eaRh1xTmDL1TifbDcJqIoe+CqO0UCq4AenvBjtF7nySuXVlsiWv6zeC+gZT6fOZp7FBDAEEjrJKhQIzifqE3tz/JZ8MRqZ/swNdDoxu0l5lcCHVwzFYCDNp+cr75w87eT80fTswBHLsrGp8cNUkM7gpqAyBsQROWlJkgInfYnDWvKd4ohhO/BClNjl6jSHPxDrb+52fBHHR4Xje3H2MdiZnrFVfLb2x4Bd0b8I/BEXHB8XxqYABu/8Ef84PS5G1frlyE7+zBe7QRG+yi9Uixfrh2NqGI6FI44pJgjHTVceVfVvB66TNO6pTpn6BxN763lyAGFI5G9Xpwz8dNz41eNYnJGu/JX2x28RzBCr+lfPAy8+F5IGSWwOyaPYz5an8sVuIKKGHR0dWMmNOG7a0Vn4DazgeGnJ4/WD6OW4JPkmgsPUgm+q0xJ6fFyd5kRuehdeVp1yHFGUSRXQ0+waQ40DofRxjOqHazgWljjSdeP9cUzV9B/4JgX8AjubcAjazYIsqpWmJc7wh5PvSfk/ewZ2/KoK0krgRA/qiDDnE8dwTSe+GH7Frxb6WsnZSUlnaKhU3ylmhgYlWJWkWM81deO7KL7XdBUJbfk7/Zy0kZ6IX/I7T/t97n++O54BqUd4HBefSWl/m6Qmfxbg8HQvCcR71JqfgmHgMJz81uRkOcNL8IPr8jx1SufpuwOLp8d7RzeFCzhRbvIafpU3g68bxRcugrCNwehodcqmwKeffroLZdLCsD5xuPJGZq7k+JWDGSK8rPr5H36+O84LY+PvIUzoTuusos7BDNHMTy4nE+UNHA8MNHZTlxnfmjhYeOMnpU6aNxxaUjuCiNRhRyDWCFen6qe8mHA0XECKt63SQ/iqqypRTVAPvt8zoX0ihsQxrF/JiUZ5sH/WpGl5ulEn9IzomTJqhQuaI82D1KnBYDAYDAaDwWAwGAwGg8FgMBgMhh2G6p+SDYYZ4brurvmXTrVOjaENm93Nu+ovpnC+IxapS22J3Xh/nbHt/hmkaaxvfCOw5W36A2JaT+f85xwfn7vtZDXmGm2pj5y98L1stg3eYfHixVvmH05bCd+SvPqUTi/Wh/CdhNc/4hk+6pq+HtlyRaPR+AbfPFfwR8nSAwrzEKrg834/YYPB8cM4oYWwYnS852S5bmDiCOZgIC5Ml5rNv8160BIf/8FTvWfoTH5LeXelORwfK2zxO+GlTzQdcYf+g+i2ABVMpVf/chkg70hBnJ29R7IKfto1C8uWzZrQkU/oCIt/662tbF3UjcI+qcNO39M6/21wcHCPXIisbFIOh3WS51SQWYE5J4gHcePftMq7LY2Bxm6YA4NnUy3lqWBFfCu5DNf1e2iH/5aqIPP8WnJB9bp2FK7lXbB0W7s42dXH/6iC9WI+CcPytnGQYy1jx9eqsC3g38bt7sM8H9JOJ6LlobRzvrBQUfmtXz+9+Nqs0H/RhsO8u8hNeH4gu0otCuyIJxaxgLjpP+lwlJDS36Kdjc63tBCFdvIa/DBzSocPNpXn8/RL5GWzVjkOKz5XeXekOTJ+0Hib2aO12qe7UAbmhR1Y4sZ2U20wBa8oFOqdzsdMMZxXZ4uBPLwr839K6/CYdKq8OhJbEyfnlY7i/7T2KU8rhBDUqRn37fi6PG/d9AW+aXsD+0InihLP8wfp/BHOCHITH2T2h2+LH0y/XLoOAqanDLKf+ms8CJ0wF6KoMgtXZ3JQyOR+gVoOXKELqXeBOPEPdfpib7I0p5yaxnzWHBVUy0R/Df7er8NhNiAEEP4QCPhheiEHVJDddrkOj5l1ynteZMWcp34tm47dDW2nIr+VVwtY7zF7Tpqvk1UEy4Oy1sG/5FW54VdQvmHOqAo2r1mLF2OKeODEz876n+0wgnXB0kPXoaDg3xxJzs8SSf5OwlMQOSEkHM1adAnfTLQTJN9JDy0I5l8Rf9Xpe5pW/C8cUZ9Qk8pLGcD5wz4vFNENCsfT05GOlStXlppoSjtPBYWrTubVjA2H+VxW3wrztVyxUIX2D0bkarwvFxZraHmDvoYJwxsp7rCW2VccnsLlwlibOFPY8vbicIKeeAxXXGCtCFWiK3WYqBbfr7xLwHDmNOlw5CD0+B1Vf+ig+FdB8HEcefGfqVVZiuMZwSpbST56XNX2EZKsE0DC9FbaSA9Ul3KKgkS2yo8wM1onHsYwJfJtOqeeFTnYSOq/BFrQYOypqHrSqMnv6GdRreq8cIYCMz3z51TWtQCwY3RaYXPBVgrs9A+C8kI/RzsYruo2hpqW+0vXLdhf0aV8zRKXFa/lYVRa+LhQwPAPR9MFHLGCBOVFfZ2On1LeDBnuvEwOXOilpfVAiuCvRZTOtXgWntG0Y16/I6zJ57XCAPRut4devJbKpfd/I9qBpkG/CD10VkbWhg0bdoJaJLcGBa0ziwSM11bsROAlz/Kz6SUx5KC8u1LUZFTzV0RO/EBgxxc2R+KLSUB/y4JKz+fMoqa3L43139F+LOSqYPleynyK+xEsOonCkHV5gAreN6HHi7s8gy64bkb+/ve/70Tpeh6VEpPNKf9/1a0pCYcnDhcwIfQ7FxzS2SCDWQXdvpBB/TRJ9Fpqqk5XXnMCGivy0nfDWvI2qeee4xEblm3gglKnPRn7YOyYyE6ezgWmUKvhSJO8h2WASAheCq10Rk2mwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDIYvEfgrD/58qE4NhpkzMDCwc2CLtwNXvjObvykZDEzoyUX6709+vbxNvKFA/FG8P/58iK27sLeb8u5K4MQPYOueXv9Rw/5KTVc8FY1ERyivOdN1G5+tAP63DyEK3XjdTP6Ttz1IvInLsPYBtnmaqvyLOnXSvcj/QunKMz3Pyzf/22IIZ/w5XePwz1bsHacutSWwk6d1eDGSnqO8Wwisj4+n5mANx9vjX7j9QvH9ltcSsJOHlNdWBXta5f/IteKHlfcOSf2D+t7FhSj42E3XQHBwHX8y1eXG15GPM1yHoSv4561+ADtb/lRdaqHpykuKYUM3/YW6VILXA3Cm/xWLl1KXZo37/uZ8CT7hbRnB7EXA/+LN/i69o+8ChbWRiv9ExjE7K7gG17Gqit41NA/njT/LN88VMSy+rR+cOzdtWZgKTNWmvl76Lz652EmvUJdLULjSRpFbQpCKq8X5dtSyy+YcadHCoZUu0JWBavMryrsr2DyzORJeSwX1OBXaIjIBfqgubXWwQAanlYSEl6yhX+S7FiT4YeEQnYcc1om3zJawoSPyZk270EnypVyKhJb4TTWscFttKofa4mo4OHV5VvCKY1ptU+GSrdK1+a1b8cloToWdPqq8qsyPvOh00r5P8QoqmcAsUdcYasp40Qs4yqcnA0++GbnJq1igTAUpgbWjfCtryrXjwiRbUgXpC2x0GjnxM1h+Biu3YJWSwI5/je0eVZC2NGqNfOUWrXHwS7bvVbgOQYIiYD/VzIXD4g2+eS7I/5R7Tj94OgNCV7S8OBbm0tpIJ5KP2+yGGrry0fx6YQvJRqO83eNMwGaqOh4UvvLuSORN8BI0yDx035U3M/BOunNxwS3tWEALBqrvZc1Au3DYmVYFyyHBW9IuPJxeG6kX0GDF/K06yu+V3TZz5BVPKvc0bXETrmEZH9ZQECT1jLDLMoJ9Qz20a/TDQmf8Yn1MGfWMCpLjFxaoohqSCwd2jFVBGOxPrBNJv6vDkfA0Hbbdps/9QtqFd//mTOiw024RbPYaUS2urrqCtTEp/byFsHaUueuoAJY1avFPVLB52HVXv0c75w/5Je3QsMSR+hpq+yfNT/alfLxK+7kfxceqoB0JrXBB8Zn8rsppP3ZdVr2r/Udtl8gePxqLgmH75vpweLjuafIiXLXkanrXN+mdX8eaoLU+8rIraBqwHA0Shox03WlDttpuRo2/Ha1UP17iRd/J7B+En1pc7g5TIl/J4sj2U0Xi+T6+t/1ydb1ARuhmDRpGeXcEi4clox+foDf7LlJaz9JOVotR8W11qQT1ZO/J0w1HhdccESfpc+qglGpy5CX5IlxiTBwDP6xip/1Gh4Oe+1hzM6bCY5U65T0PSxSOYQNxtSk68h3LRKvL25fiS5LtQ5I5vcU9udxWYEFQ7SmEwxv0DsEob3ZfZR3FweAwLYzUvuerpelxGLiBWeydS7bHIfp+enbPZo3S8DjS6tdEacFOFkjVPEMgsRC7utSCfkd+JsXVHPpkX2gp7UeVaaEKymAhrSysmN7NeXh60VZoLOXdlvomeUBeWSu2mmassAgs9kdX3iWytc3jxaQVX6R8WM1rYdnxOt+VL6sgDBZ0HdoSyyL7dvxnJIgL3osO4c8ASggiUvMIA62FNlknPrTHeewGCeTziiDp9bqRIcVtrkkT/VrHMZuBSb3kHtJHGdRzVVx8yuD0VcauRgs9VBKkjovS4zNIoVDJJsvWaxxvjOd2mvCSyziwQmtM0lz5YqnYqF6HD1zBPadOCDf9WR63m1ygvEuM2WP5XvKjHXqDVF63cT6Rts2ey3n2Dvnnyxg2Nk7uQ/7voZOBJlB5z5zPGp/tpjMK7SX8eOVY7UeCAoOOEvOqTnjoTi9YievsVxCkrKeRhSUNxoKogU2DF8quZUsmzwR6Ya7t3XYZKJIXqpOW0+GOH5an0ZEPKu8WSJs+psNBAFCh4N90kju0vz8SHxeNThwBTc4VTr2f78Z/4UiI0JP5uo8kHC3rWRYpLbhaqIRFqCd3qw6DBfGVdwnhyHtgquThVLoKgjQfi4+iKQ5q8kzkKRnhs/vsU1xUc2wkvEh5T2+8TwJCtXk6MVSzi1++2wkSusU6PN9fdDBmtSCRKy6K2Qt0+3PtYMsVyrsL04UKY1J5Mli5X6eB4vqD8m5B99YQT3G9R2g4fT9pZyy4ipr/ajtB8q3CCrTkhBJqNKdUcAspbafhXIMRex220WYBWNiiyEtcR34gX9SlEqQY7inmtRYqLUhNOzkL74E0T4xNHIPrKTWZfPNMQBOmE1RV/cWM0o7CvgE7SQVh8jEIigfnsR3nKrcf12196yqhN71/Rljr/VlkdFieqsMHVnKj8mYo8/KxqNApj59I95Oj6L2W4QOtFtzQFrldgYpULCDtqIDeRKHocxjMpFFuqYalDswS5JPWrrAby5VzugcNIVTeOaGdXqSvkwnxvPJuIbCj23Q4Dqu23ND7kWRGu3yX8uGmpo1hmrSjZu5K4KQP5A8aKXfHqX3/lb6GzAwpQ9SlEpRJJY2kx4pwDyQf7TPCsGOhk2uKGg4r4XJEfaDHe2DENqhJVt4dIbV9s04LhiKUdw5loIqPCtqLr8P62Kgs7YQkHAn/Wd2WL4Sur+F+vxYvlTLbyoLuz68Vw+THlfhJK5WaOl4Iv9AiFG3Jer1+gL4PYXzf79hjE7a4nMuBngch4vD4LWhAdPkh0Fh/G50n5d0/UNO8ej8liAq/ZbsoaB7UKAiAP9R5FFX3UCAcsrQ8cueagpqgM7OTgFbBR8i8MNy0Y7OGQh6kgoD6DwKyx2y5XHcMqgSksYoFXHTwR4cBBRm46ZpWTZxcg/zhMCNJLmQgsMT0GtnkyBhf55OgVp+FPEDzV92iA1Avc3otbcpb3xKLSACe0AKGe0mzPaCCtwVmg7TlqU0rPYP3JSGBfP/991t6p6RFv+J+FO+vTmeGb/mn5Al14rafQfoB9yKzfSv8DcaV9EtiQE0FaQGFojOVflsGPNtBtfbOQnqpdsnnMYhKGX6BcJKrSdu9QpnMC5Kzo8JUt3bFt5OHigWMYxKQN5KxTDhsO9qv2Oz0AzonVPgPUTzPkQ16HxUU388DvaSxMaqMZZ5Hu+QRoHd8Qaer6Dh/nbSv731bHd+JrudEUcaNfdSq9meCrlEoyOxlew82xh7Wwqba3ueHzMAeL7X3vRxsvE5GaBXSzrtFteh0CH+vaTPbEthbgR0/nmnFrIKgEtH7PaKCbH8wXI5xDrINXkKClfecwALwWDQdGkJ5dWUmhjY3xU6yMCR7QmdsVXhgOJLdt5wy/4/eYLTlJ2sZ2gOVvaWESIOeoDrcqmDXgGg0OoI/4FLbv61nShoMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8EwG7D/o29Fl4ZufF/spddid1bsraMuGwwGwzZhfmglP8aWQ3pPKuwq4zvxW77VeTM3g6Er2Nt7bCT8Z2xFiK0ZUyfda2r9VF97WvULtk5qNpv7YuPXLbXzDuJC2msU95bezcfQm7FNH38X+7UWt7TKNp+Tr6RDrZv3GvoHmyBCvmeySfQXHrxsSCZ24Mg1rUIVvzVWC3+kgs6W+dj6vGnHy4tbbmJnymZz/CAVZkZA8fAW8Z68m/e85xZZvht6ye+pEHvui7utGKf3ozy8AvsMi3pyte/4h36ZlGatVtslsJOn2+zW+XrkfWz21psl6OpiF9XAjVaSbL8XWOId7FDKu5Rit3svuT920isCO74wdMLTJjdOb0fXHGkeJJx0Ee8zjXtRj91kHVzsTKwKnfRJYY3fGNTl8Sg/dduOQzg8cTj28mUloYQqFy5WSsmqcOPkt1TwGQHlEHjxA9gcsn3c8RUqaF9gT0OK79ygFr8KBVSNk5/jpaer4NsVEqKfYfdWnTa8LwsVKWcV5AsN9qrGpp7F/M/eU64J7PRCFcwwC3gX3bp8ql2dzPJ4umvMft74L7UV5TviHF030DiUGgsKn9/LDYf8U5r+71780B0BmIS+Hd/f6cXh+CWs6AZ1S9/AGgjdeGmnuOEfuukvVPCeYEtkUo53iHyr5lYHhSRs8QN1y3aj/lHwfbI4S90YtFaU10sn6hN7q2BfWKgF/2poJ/eh1S29oxOvFc5EXzsfzwRUtiiKdkKXf7O7eVe07NgNWV3+0tEckkfBwinmbVG5cJ1Ujs+t4JqqQuL6hS23ydgoxlN0oS1faA419+WH7ghElry02Iq3c9mLJQtn0o91hsQxEZmb7eLTDvEKL7lM3dKVrIsmrqpWgKrjQqrFP1G3bRdqtcZ3IjeFqZ0r4qw1Sl+J3Xh/FWxWQCmjKxTa4Xlklp/TaKQHzrYLiLhgwTZdeVRzJDq/UZPXB7a8zbfEZXjGwOL2FR6KgGTm1uL7wWUNRXorxh59yz+YxyGH0gPd92c3BhLBAhsWN0a2XAllXspPlDMqKHXXQ1f85pPmJ1u9UuG9GwON3VCGeLdoZOKIYHD8sMZQ40Df93cfGEh3RpjZvGsVf5N/aITuWeF9m7ZcXbW4dZ5UFNLZWiE1qUyajnhTh+N8VEpNuSU7hEKCEDdr8hJq5cotXFbwpe4Vv7gj70G/Vt3eFVEXZ5ACe6saR/EcDs/yqVKp27oibXkqVRYqkEKcEMiKoMKFdnwfKpu6dZsia3JPqtB/KqaH88+V70zU/zanL07ZeE16t1bKeH/hjq9ujoTXRhuinVSwjqxfT1aNk54YWPGz1K19F/lfTGfRZQo0WTi1uLXMSYCPiux0RfWeNsLOjv1IqYwN9j8WCQVZLe9ODvmLPAkc8fPZKudOQI7qg/HJaEyCNsMOVccySc6n/KXzZ+gdTl2/vvENFV3fUFmTHIWPtRvqaOd8S16p332UFFJAiovzhe6ncnyD8wdyqNKHe/jYSpY0Pmh8hx+6PQk3hQsos0pCxYknEw7diqI/XGAnf9y4cWM+cNYOtA7SoVZWvbB2EFRSEmuLfuxfS94K3PHD1O2dmM8Dd5X7kdZs/CJ9EJldvIZxmjE7/q66f5sSe/HNVSFC2jGepILMGigH3xUXCC9dEXrp2tCL1+JLlk8VRgVpCwnqV6PR5HzkdzFdRZcpTSWwlH5BCpSUyE9VFCVib/z31TLux5FSXj22aaxruWz8943/QFbPg0hL8V4ub6TJkcup3JdHdNySBjd5LXRmN9ZZBdZGc0ScRHWkZOnOxuFjkT8S/RLloKLviw3UyND73iCc5PXQFm8HI8lq7TDFgsof0ypI1sXSpidOUrdxw4X7KD8ex9QLbih0+aoy5jpJRgMZBGer27YfH3744e6RE79UzGgkUrjpi95gdEhoySeLGQoXuvIFmNAqirZEdvzrYmXkl6fzMUs8QRnYouQoMx/r1bKTcryuqnAoXiijp2GNfBp8+k0S4GWV6xibeiElE1pFs02oW8HxpCBLA+3ID99O7ldBtjnxyORx1JV6vVjWcEoo1zUt8QadPxI5E+d/1vjswF7dDX8kPZvHJQpxFR2XDVUYOl4SjlTKjfKCGrzzVFRtwZelljxEOm3xKMaOVLB57n8Fh6FSFsOh4jdG5GkqyKxZuXLl10n5/bad0sW7B278dFBLrialeEnTCn9B1uKvqWF40rfFy+FwjK9YLfmDuJqOvHdxG4tzazI1b2q+/6G/e70+sTecM+DshXE4jMdtia7lnOHEOPHD1QwjbblKkJbFXB4y/56oXg+ceAkUgIqmxODg4B6R2/q1hS0DW1w+Sn1txF+6RoIL4VNRtDAwMPU1EorbWqwNCERlgJ1aEIwtlcJxBXTHczN2a4PPrmRR/KGl4tfEinA4PFwFmxXZYL48LXLFU6EVUz7GL8FS6tXiorsQjLR2c1mhWPGttf+Y2SffRqOxD923pBhf0QVuuoYq6ZWoBGkjPTDwKnOTsmcv7FQmqCRkmb1czEMcwzpvVLo9oROeCIurGD8UVDzHL5iw8gMvfrjVyk3WhZZYVK/Xe36QyMb5qGtdGQ5Bt5Xq0Iy7R1Acmzdv3hXKZOPGxj7WxsaR1KX9KTU0N1Ie30516w441JeoFp2Od1C37vhQBfl5S/eHMk73v7liufHjxevKtSgkvLhvR78k8/DdltaE+tDCTi5HZkpLHk+CVRYetJZW8mMVVQu+LTneNvfciU//KhiTpunOFHZZVRlEdvI0BlRVsK0KWQ74stHyccB3wlvmOrkU3ZwxEuZyvDDXJzp21eofTOyNRqSaJ2ShvOxsDGfVrQnsqKWBmHZUVvXkLArGysYb9A7BwH4xDGSErKQbobAQpkpQk2dWZRMD5dT9vkgFycGgOcVXUo7UKL1GXZBDVZBZIaibVk0Dx11PFk5RI6mC9QRDBugSFeOABUcW6RkqSF9wo2LLN5HvVJbvwVoslimO0RhDGXNjTV27JikldXsOK0lLXkllsib0krcx3BFa4QJ1efuALzOZyTn9QmypWPJXWkhQ2anLdm9VkKnlWyHr8gCOiKjX/VPwWbsqoLiPTNfnw3C6L0+ZdQJlBvX/p8Mp5dKikHgagpX8BuZ9NTxZBrd2al2bQ+IMjCuU7qF3pcy/WQXZatQ/qO8d1kRpegOOSSG8tGzZsp6Dzb0ILHFNS2vrpivEqPi2CtICKiYJZ+vAsy1/B0tEBeub2I4v9Gtt5n2hMljJY9UJrk0nOb9dly3xJjs2QpRn11Tljro/q/AVUAXJibzoEFKCy0thKX6/Fv+5trLcYM0Eep+binFyvOgyFsZo+qExRBacXW6EIZ/+DP5Kg7pAVtXdlCeZIoJCrzb85JBnXJ8Qxpar2ym9sC7Pwxgixpwoztt4XIrCR55cRo1d1270ViEhpYDEtBS4ly7CJ0sVDMzHp/jqi+MzYuzF51LFuK9J3YBMQUxfZ4cvL8PRPyGOLKqMmVhI0pm83q+0UEgLJnChOxC64S+qLnDSn+NTNZnUz1XTjUwXo+NbdV4StYYtg+5oDcmEPlMFmRNkDZUGkbkMXfni5/7nxXIrkUIhua0KCWMjM1VIYlh8u9r9YufKp9CNUMFyMGZByufZang0YGOkXAWXk3yTrPJlYjS5Rv+NiBTMDVX5xIRdCn+kipq78g0rvJMrXyVs5tLlGHZQwWcErAhK14OtcSar6oXGuBdQlmgMqrKIBgrDGypYTzC+Kjx5D70rlE1by5TrRuEaFFJUm54YTGW9B1lqv+cGzU1fDWrB9+GP3o2wkstQr9mRUYL355u2NtDWlJi/lISaj8eXwLRXwXLIwvlBdWAO4dm1EQJo3oYV/KxT1wQWEuaLlO6pKCS0BpSZd3d6xlwctRj3zqXV7IbrxvtHXlLqGvGxlSxxP5rbnCPgDKR7jdn894FS2VGePqSCtAWKYmy47XjPM46Tdp2Zi3JEpfKG/e/h+ci/1gaIuunUxVK3lBD1iatbw0/LUMkf84jq8cW9FBLmRGFYgefXVONQDvfiq6P+GswWhiOv96nrpOSNnHyFegoncEIrUBq+Qs+4pyUNTvxuw46OVsG6gsZdeGnrRyFqsJp2hC5t3+R1gtJTTVMeL4+plhVS0UKivLpKKRxqIMWNegpCUE+ugsWGhgHTdLbZADc+XVJBrGopRDd5urGxsY8KVmJww+AeFKZl/KHoWGs7yXNBPTi+l2ZlhdTGQpI1qeelzKeM7DI+MTdHZvzSXpVwNqCVoW7kA9XWiwR47ZgVn6uCzRpU0qCWXFUtOwiY9CZ6zukhgbuk2rAgbVQ5rlVBGHTTMcEvduJbmnq8QikPKjceuyimgcuJWlR1ewnKk52pm/xYN9mBQ3xZ6xwv1ON8ol2XLZMJ6rZlXZbitarje125IrDjxRGmRrS5h959XWjF/9JJZmPqUlWHNXDs2/KF0eHRjl1kMOZMHEMW6MrWdMo1/lDnDzidgHyhrPD8UnqQd6TgeEgC9TArIy6v0BHPhZUxwiAIvum7yX1Q/hSOejfpnxpWhK7w6l5fPbco4Wi4AGMNxczhzLLki71ab8xTgnBW70W3r+nEF0N7q6A9gULqNIaEykCt4F3VMSN8sSG/G6mbeFzR4X9gcNn5ZO7whTBwxn/IA69UUMW40DqNWcGcFUQVDOi3PAvCXBNb5K8TaLGpVf2p/vMwx+9ShbLD+/qZ0gBLh7oJD7RWEMSTvKcrebvr2lUrA1zoypetD/2D1WNawF8XqLEqfVWFQxljPk1kx/eH9fDwaquML4lQUtX7qg7pgdVStbp7OYQXTnI15Wv3BrQeXwTroeV+yieq8IsatemJhIhLWJNH+pZY1O5z/xg/c/ZzfTB+RmX4TIClXTKLZg0Gy2HZNB3xBsn2a6TwlmPCLLrW3SwdXmnDSc6n9DyBybEB9Wq2oWXUPIhagpb5J8JLnmv2Oc2+9p+1PeP6xCmRFV0a2clZth3tR95tB5W70RhKDwwskc8VygSKzOjB5IS4nl6BCX7FNGZO3oAWQkXRN/gsS8Jaem9V4R6GxaGCzRnp4osQVa5Smvmr0NJodOKIlT26iPjk7g8n3xM1cQEph5siT97N0zHc5PGQukiYmb5+8Xoo/fm+//nu6Wi6YLI5eSz+BzeT94D1QYr/TlgG1bR2csi7TPDlvXgX35q4rGlRpbDEi5S3t1K3pKMy0mCcyvrI+kc0HLAcII/4a4W63BFMZ8AXxarcsuJEi+7KR/EljD++ePJH+KpUDasdWw9UkalhfTQYCX44ky+u+LIJa6NT3JxHHa7BZYo+fqZqrfy/xbeSy6hASkKI1hutlwqyTYkGo0MiO7qOTEQSDnl79tmWLBoS/FIaqRUV+JtKbWrWYz6+Fd1afHe2xmz5rxhsVUHmynwStkfaWRZaUDOBpBaVn52QVUMOJjad62vVe7Xj+9Hnd9Kfz0YptwOKjLpkF1N36jmMM3BaMBBPLTjl1WuU54vIKrgU4zVoSdVt24v5PJVjMNoDU00ajc92q85D0iB/5CZ5AMZ4MDaET9kY/8JKBL0soX5oDsfHUv50/IN41cEKpO7d86OD4Qn4q46KxkACR8I3bUJyRbDjP1LLssOsfxJ46YXFPwtygdpy+Uy+aLQDraegVhmf/H07uQ+D9J0EerbEbnwsdTWXohUupn9LOCgKsrQe2uxunvOguGHuYEpMo9HYh2TzVGpYbm7ayePUoDwTefGzkS2fIr+HSLFfOTYkjkGjtyUt8S8NGD8Ysz/+Lgn3tdTnXDhKmVmbg9WxNUDB4TMkmeK3oVDFaHLB5OT0QlNfBDCW5jjOXui/+1Z8Mv7kiLk+oZs+T/n+hkB/HwP6GO/AeEIt5v6/sOULkRvfhcFpWCXULTo4sv+2HwR6S1lFBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAaDwWAwGAyGLw/z5v0fIRk22EdpvLgAAAAASUVORK5CYII='

const logojpg = 'data:image/jpg;base64,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'

const { TabPane } = Tabs;
const { TextArea } = Input;

const classOptions = [
    {
      value: 'Level1',
      label: 'L1-Scratch基础',
      children: [
        {
          value: 'Lesson1',
          label: '第一课',
        },
      ],
    },
    {
      value: 'Level5',
      label: 'L5-智能硬件',
      children: [
        {
          value: 'Lesson1',
          label: '第一课',
        },
      ],
    },
  ];

  const formItemLayout = {
    labelCol: {
      xs: { span: 2 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 2 },
      sm: { span: 8 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 2,
        offset: 8,
      },
      sm: {
        span: 8,
        offset: 8,
      },
    },
  };

class FeedBackPage extends React.Component {  
    
    teacherSub = {
        name:'mamama',
        student:'keil',
        lesson:'none',
        commits:'表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好表现很好',
        rates:5
    }

    render() {

        let downloadPdf = ()=> {
        let doc = new jsPDF();

        let addContext = (pos,label,value)=>{
            doc.setFontSize(18);
            doc.text(30,pos,label);
            doc.setFontSize(14);
            let lines = doc.splitTextToSize(String(value),140);
            let newvalue = '';
            lines.forEach((e)=>newvalue += (e+'\r'));
            doc.text(35,pos,'\r'+newvalue);
            return lines.length;
        }
        let startline =35
        let linespace = 18;
        doc.addFileToVFS("simhei-normal.ttf", simheifont);
        doc.addFont('simhei-normal.ttf', 'simhei', 'normal');
        doc.setFillColor('#001529');
        doc.rect(5, 5, 200, 15, 'F');
        doc.addImage(mlcpng, 'PNG', 150, 5, 45, 15);
        doc.addImage(logojpg, 'JPEG', 8, 8, 9, 9, 'logo', 'FAST');
        doc.setFont('simhei'); // set font
        doc.setFontSize(10);
        addContext(startline,'教师姓名：',this.teacherSub.name);
        startline += linespace;
        addContext(startline,'学生姓名：',this.teacherSub.student);
        startline += linespace;
        addContext(startline,'课程级别：',this.teacherSub.lesson);
        startline += linespace;
        let line = addContext(startline,'课堂评价：',this.teacherSub.commits);
        startline += (line * 7+5);
        addContext(startline,'综合评分：',this.teacherSub.rates);
        doc.save('feedback.pdf');}
        
        return (
            <div id='feedbackpage' style={{padding:'0px 20px 20px 20px',backgroundColor:'white'}}>
                <Tabs defaultActiveKey="1">
                    <TabPane tab="老师填写" key="1">
                    <Form {...formItemLayout}>
                        <Form.Item label="老师姓名">
                        {<Input onChange={(e)=>this.teacherSub.name = e.target.value}/>}
                        </Form.Item>
                        <Form.Item label="学生姓名">
                        {<Input onChange={(e)=>this.teacherSub.student = e.target.value}/>}
                        </Form.Item>
                        <Form.Item label="课程级别">
                        {<Cascader options={classOptions} onChange={(value, selectedOptions)=>this.teacherSub.lesson = value}/>}
                        </Form.Item>
                        <Form.Item label="课堂表现">
                        {<TextArea rows = {4} onChange={(e)=>this.teacherSub.commits = e.target.value}/>}
                        </Form.Item>
                        <Form.Item label="综合评分">
                        {<Rate allowHalf Input onChange={(e)=>this.teacherSub.rates = String(e)+'分'}/>}
                        </Form.Item>
                        <Form.Item {...tailFormItemLayout}>
                        <Button type="primary" onClick={()=>downloadPdf()}>
                            提交
                        </Button>
                        </Form.Item>                        
                    </Form>
                    </TabPane>
                    <TabPane tab="学生填写" key="2">
                        to be continue
                </TabPane>
                </Tabs>
            </div>
        )
    }

}

export default FeedBackPage