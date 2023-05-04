/* eslint-disable prettier/prettier */
/* eslint-disable brace-style */
/* eslint-disable max-len */
/* jshint esversion: 6 */
'use strict';


/***************************************************************************************
 *  장치 기본 정의
 ***************************************************************************************/

Entry.BigwaveRoboticsBase = 
{
    /***************************************************************************************
     *  시간 지연 함수
     ***************************************************************************************/

    // 시간 지연
    checkFinish(script, ms)
    {
        const _ms = this.fit(0, ms, 60000);

        if (!script.isStart)
        {
            script.isStart  = true;
            script.timeFlag = 1;

            const fps       = Entry.FPS || 60;
            const timeValue = (60 / fps) * _ms;

            setTimeout(() => {
                script.timeFlag = 0;
            }, timeValue);

            return 'Start';
        }
        else if (script.timeFlag == 1)
        {
            return 'Running';
        }
        else
        {
            delete script.timeFlag;
            delete script.isStart;
            Entry.engine.isContinue = false;
            return 'Finish';
        }
    },


    /***************************************************************************************
     *  기능 함수
     ***************************************************************************************/

    transferBufferClear()
    {
        Entry.hw.sendQueue.buffer_clear = 0;
        Entry.hw.update();
        delete Entry.hw.sendQueue.buffer_clear;
    },


    fit(min, value, max)
    {
        return Math.max(Math.min(value, max), min);
    },


    /***************************************************************************************
     *  데이터 전송 함수 (Entry -> Hardware)
     ***************************************************************************************/

    // -- Move -----------------------------------------------------------------------------
    transferMoveForward(target, distance)
    {
        // 전송
        Entry.hw.sendQueue.target                   = target;
        Entry.hw.sendQueue.moveForwardDistance    = distance;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.moveForwardDistance;
    },


    transferMoveBack(target, distance)
    {
        Entry.hw.sendQueue.target           = target;
        Entry.hw.sendQueue.moveBackDistance = distance;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.moveBackDistance;
    },


    transferTurnLeft(target, angle)
    {
        Entry.hw.sendQueue.target           = target;
        Entry.hw.sendQueue.turnLeftAngle    = angle;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.turnLeftAngle;
    },


    transferTurnRight(target, angle)
    {
        Entry.hw.sendQueue.target           = target;
        Entry.hw.sendQueue.turnRightAngle   = angle;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.turnRightAngle;
    },


    transferStop(target)
    {
        Entry.hw.sendQueue.target               = target;
        Entry.hw.sendQueue.light_event_event    = event;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.light_event_event;
    },


    transferHeadUp(target, event, interval, repeat, red, green, blue)
    {
        Entry.hw.sendQueue.target               = target;
        Entry.hw.sendQueue.light_event_event    = event;
        Entry.hw.sendQueue.light_event_interval = interval;
        Entry.hw.sendQueue.light_event_repeat   = repeat;
        Entry.hw.sendQueue.light_color_r        = red;
        Entry.hw.sendQueue.light_color_g        = green;
        Entry.hw.sendQueue.light_color_b        = blue;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.light_event_event;
        delete Entry.hw.sendQueue.light_event_interval;
        delete Entry.hw.sendQueue.light_event_repeat;
        delete Entry.hw.sendQueue.light_color_r;
        delete Entry.hw.sendQueue.light_color_g;
        delete Entry.hw.sendQueue.light_color_b;
    },


    transferHeadDown(target, pixel)
    {
        Entry.hw.sendQueue.target                  = target;
        Entry.hw.sendQueue.display_clear_all_pixel = pixel;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.display_clear_all_pixel;
    },


    transferHeadForward(target, pixel, x, y, width, height)
    {
        Entry.hw.sendQueue.target               = target;
        Entry.hw.sendQueue.display_clear_x      = x;
        Entry.hw.sendQueue.display_clear_y      = y;
        Entry.hw.sendQueue.display_clear_width  = width;
        Entry.hw.sendQueue.display_clear_height = height;
        Entry.hw.sendQueue.display_clear_pixel  = pixel;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.display_clear_x;
        delete Entry.hw.sendQueue.display_clear_y;
        delete Entry.hw.sendQueue.display_clear_width;
        delete Entry.hw.sendQueue.display_clear_height;
        delete Entry.hw.sendQueue.display_clear_pixel;
    },


    transferSpeech(target, x, y, width, height)
    {
        Entry.hw.sendQueue.target                = target;
        Entry.hw.sendQueue.display_invert_x      = x;
        Entry.hw.sendQueue.display_invert_y      = y;
        Entry.hw.sendQueue.display_invert_width  = width;
        Entry.hw.sendQueue.display_invert_height = height;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.display_invert_x;
        delete Entry.hw.sendQueue.display_invert_y;
        delete Entry.hw.sendQueue.display_invert_width;
        delete Entry.hw.sendQueue.display_invert_height;
    },


    transferNavigateToPOI(target, x, y, pixel)
    {
        Entry.hw.sendQueue.target                   = target;
        Entry.hw.sendQueue.display_draw_point_x     = x;
        Entry.hw.sendQueue.display_draw_point_y     = y;
        Entry.hw.sendQueue.display_draw_point_pixel = pixel;

        Entry.hw.update();

        delete Entry.hw.sendQueue.target;
        delete Entry.hw.sendQueue.display_draw_point_x;
        delete Entry.hw.sendQueue.display_draw_point_y;
        delete Entry.hw.sendQueue.display_draw_point_pixel;
    },




    /***************************************************************************************
     *  기능
     ***************************************************************************************/

    // 데이터 읽기
    getData(script, device)
    {
        return Entry.hw.portData[device];
    },


    getRgbFromString(stringColor)
    {
        let red   = 0;
        let green = 0;
        let blue  = 0;

        switch (stringColor)
        {
            case 'red'           : { red = 255;  green = 0;    blue = 0;   }   break;
            case 'green'         : { red = 0;    green = 255;  blue = 0;   }   break;
            case 'blue'          : { red = 0;    green = 0;    blue = 255; }   break;
            case 'cyan'          : { red = 0;    green = 255;  blue = 255; }   break;
            case 'magenta'       : { red = 255;  green = 0;    blue = 255; }   break;
            case 'yellow'        : { red = 255;  green = 255;  blue = 0;   }   break;
            case 'white'         : { red = 255;  green = 255;  blue = 255; }   break;
            case 'sunset'        : { red = 255;  green = 100;  blue = 0;   }   break;
            case 'cottonCandy'   : { red = 20;   green = 250;  blue = 150; }   break;
            case 'muscat'        : { red = 70;   green = 255;  blue = 0;   }   break;
            case 'strawberryMilk': { red = 150;  green = 60;   blue = 20;  }   break;
            case 'emerald'       : { red = 0;    green = 255;  blue = 30;  }   break;
            case 'lavender'      : { red = 80;   green = 0;    blue = 200; }   break;
        }

        return { r:red, g:green, b:blue };
    },



    /***************************************************************************************
     *  블럭 연동 함수
     ***************************************************************************************/

    // -- IR -----------------------------------------------------------------------------
    // IR 데이터 송신
    setIrMessage(script, target, irmessage)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferMoveForward(target, irmessage);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- Light -----------------------------------------------------------------------------
    // LED 수동 설정
    setLightManual(script, target, flags, brightness)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferMoveBack(target, flags, brightness);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // LED 모드 설정
    setLightMode(script, target, mode, interval)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferTurnLeft(target, mode, interval);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // LED 모드 설정, RGB
    setLightModeColor(script, target, mode, interval, red, green, blue)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferTurnRight(target, mode, interval, red, green, blue);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // LED 모드 설정, RGB
    setLightModeColorString(script, target, mode, interval, stringColor)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    const color = this.getRgbFromString(stringColor);
                    this.transferTurnRight(target, mode, interval, color.r, color.g, color.b);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // LED 이벤트 설정
    setLightEvent(script, target, mode, interval, repeat)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferStop(target, mode, interval, repeat);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // LED 이벤트 설정, RGB
    setLightEventColor(script, target, mode, interval, repeat, red, green, blue)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferHeadUp(target, mode, interval, repeat, red, green, blue);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // LED 이벤트 설정, RGB
    setLightEventColorString(script, target, mode, interval, repeat, stringColor)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    const color = this.getRgbFromString(stringColor);
                    this.transferHeadUp(target, mode, interval, repeat, color.r, color.g, color.b);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- Display -----------------------------------------------------------------------------
    // 화면 전체 지우기, 선택 영역 지우기
    setDisplayClearAll(script, target, pixel)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferHeadDown(target, pixel);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 화면 전체 지우기, 선택 영역 지우기
    setDisplayClear(script, target, pixel, x, y, width, height)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferHeadForward(target, pixel, x, y, width, height);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 선택 영역 반전
    setDisplayInvert(script, target, x, y, width, height)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferSpeech(target, x, y, width, height);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 화면에 점 찍기
    setDisplayDrawPoint(script, target, x, y, pixel)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferNavigateToPOI(target, x, y, pixel);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 화면에 선 그리기
    setDisplayDrawLine(script, target, x1, y1, x2, y2, pixel, line)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferDisplayDrawLine(target, x1, y1, x2, y2, pixel, line);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 화면에 사각형 그리기
    setDisplayDrawRect(script, target, x, y, width, height, pixel, flagFill, line)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferDisplayDrawRect(target, x, y, width, height, pixel, flagFill, line);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 화면에 원 그리기
    setDisplayDrawCircle(script, target, x, y, radius, pixel, flagFill)
    {
        switch (this.checkFinish(script, 40)) {
            case 'Start': 
                {
                    this.transferDisplayDrawCircle(target, x, y, radius, pixel, flagFill);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 화면에 문자열 쓰기
    setDisplayDrawString(script, target, x, y, font, pixel, string)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferDisplayDrawString(target, x, y, font, pixel, string);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 화면에 문자열 정렬하여 그리기
    setDisplayDrawStringAlign(script, target, xStart, xEnd, y, align, font, pixel, string)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferDisplayDrawStringAlign(target, xStart, xEnd, y, align, font, pixel, string);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- Buzzer -----------------------------------------------------------------------------
    // 버저 설정(함수 호출 시 시간은 모두 ms 단위 사용)
    /*
        MuteInstantally = 1,   // 묵음 즉시 적용
        MuteContinually = 2,   // 묵음 예약

        ScaleInstantally = 3,   // 음계 즉시 적용
        ScaleContinually = 4,   // 음계 예약

        HzInstantally = 5,   // 주파수 즉시 적용
        HzContinually = 6,   // 주파수 예약
     */
    // 정지
    setBuzzerStop(script, target)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferBuzzer(target, 0, 0, 0);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // 묵음
    setBuzzerMute(script, target, time, flagDelay, flagInstantly)
    {
        let timeDelay = 40;
        if (flagDelay)
        {
            timeDelay = Math.max(timeDelay, time);
        }

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    let mode = 2;  // 묵음 연속
                    if (flagInstantly)
                    {
                        mode = 1;
                    } // 묵음 즉시

                    this.transferBuzzer(target, mode, 0xee, time);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    setBuzzerScale(script, target, octave, scale, time, flagDelay, flagInstantly)
    {
        let timeDelay = 40;
        if (flagDelay)
        {
            timeDelay = Math.max(timeDelay, time);
        }

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    let mode = 4;  // Scale 연속
                    if (flagInstantly)
                    {
                        mode = 3;
                    } // Scale 즉시

                    const scale_index = octave * 12 + scale;

                    this.transferBuzzer(target, mode, scale_index, time);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    setBuzzerHz(script, target, hz, time, flagDelay, flagInstantly)
    {
        let timeDelay = 40;
        if (flagDelay)
        {
            timeDelay = Math.max(timeDelay, time);
        }

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    let mode = 6;  // Hz 연속
                    if (flagInstantly)
                    {
                        mode = 5;
                    } // Hz 즉시
                    this.transferBuzzer(target, mode, hz, time);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- Vibrator -----------------------------------------------------------------------------
    // 진동 제어
    /*
        Stop        = 0,   // 정지
        Instantally = 1,   // 즉시 적용
        Continually = 2,   // 예약
     */
    setVibratorStop(script, target)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferVibrator(target, 0, 0, 0, 0);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    setVibrator(script, target, timeOn, timeOff, timeRun, flagDelay, flagInstantly)
    {
        let timeDelay = 40;
        if (flagDelay)
        {
            timeDelay = Math.max(timeDelay, timeRun);
        }

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    let mode = 2;  // 예약
                    if (flagInstantly)
                    {
                        mode = 1;  // 즉시
                    }

                    this.transferVibrator(target, mode, timeOn, timeOff, timeRun);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- Command -----------------------------------------------------------------------------
    sendStop(script, target)
    {
        return this.sendCommand(script, target, 0x01);
    },


    sendCommand(script, target, command, option = 0, timeDelay = 40)
    {
        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    this.transferCommand(target, command, option);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- MotorSingle -----------------------------------------------------------------------------
    setMotorSingleRV(script, target, motorIndex, motorRotation, motorSpeed)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferMotorSingleRV(target, motorIndex, motorRotation, motorSpeed);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    setMotorSingleV(script, target, motorIndex, motorSpeed)
    {
        switch (this.checkFinish(script, 40))
        {
            case 'Start': 
                {
                    this.transferMotorSingleV(target, motorIndex, motorSpeed);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- EventFlight -----------------------------------------------------------------------------
    setEventFlight(script, target, eventFlight, time)
    {
        switch (this.checkFinish(script, time))
        {
            case 'Start': 
                {
                    this.transferControlQuad(0, 0, 0, 0); // 기존 입력되었던 조종기 방향 초기화 (수직으로 이륙, 착륙 하도록)
                    this.transferCommand(target, 0x07, eventFlight); // 0x07 : CommandType::FlightEvent
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- Trim -----------------------------------------------------------------------------
    sendTrim(script, target, roll, pitch, yaw, throttle)
    {
        let timeDelay = 40;

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    this.transferTrim(target, roll, pitch, yaw, throttle);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish':
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    // -- Control -----------------------------------------------------------------------------
    sendControlQuadSingle(script, target, controlTarget, value, time = 40, flagDelay = false)
    {
        let timeDelay = 40;
        if (flagDelay)
        {
            timeDelay = Math.max(timeDelay, time);
        }

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    Entry.hw.sendQueue.target           = target;
                    Entry.hw.sendQueue[controlTarget]   = value;

                    Entry.hw.update();

                    delete Entry.hw.sendQueue.target;
                    delete Entry.hw.sendQueue[controlTarget];
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                if (flagDelay)
                {
                    // 블럭을 빠져나갈 때 변경했던 값을 초기화
                    Entry.hw.sendQueue.target           = target;
                    Entry.hw.sendQueue[controlTarget]   = 0;

                    Entry.hw.update();

                    delete Entry.hw.sendQueue.target;
                    delete Entry.hw.sendQueue[controlTarget];
                }
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    sendControlQuad(script, target, roll, pitch, yaw, throttle, time = 40, flagDelay = false)
    {
        let timeDelay = 40;
        if (flagDelay)
        {
            timeDelay = Math.max(timeDelay, time);
        }

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    this.transferControlQuad(target, roll, pitch, yaw, throttle);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                if (flagDelay)
                {
                    this.transferControlQuad(target, 0, 0, 0, 0);
                }
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },


    sendControlPosition(script, target, x, y, z, velocity, heading, rotationalVelocity, time = 40, flagDelay = false)
    {
        let timeDelay = 40;
        if (flagDelay)
        {
            timeDelay = Math.max(timeDelay, time);
        }

        switch (this.checkFinish(script, timeDelay))
        {
            case 'Start': 
                {
                    this.transferControlQuad(target, 0, 0, 0, 0);
                    this.transferControlPosition(target, x, y, z, velocity, heading, rotationalVelocity);
                }
                return script;

            case 'Running': 
                return script;

            case 'Finish': 
                return script.callReturn();

            default: 
                return script.callReturn();
        }
    },
};


module.exports = Entry.BigwaveRoboticsBase;

