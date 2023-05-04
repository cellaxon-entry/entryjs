/* eslint-disable prettier/prettier */
/* eslint-disable brace-style */
/* eslint-disable max-len */
/* jshint esversion: 6 */
'use strict';

/***************************************************************************************
 *  장치 기본 정의
 ***************************************************************************************/

Entry.BigwaveRoboticsFome = 
{
    id       : 'F.E',
    name     : 'BigwaveRoboticsFome',
    url      : 'https://www.myrobotsolution.com/',
    imageName: 'BigwaveRoboticsFome.png',
    title    : {
        en: 'Bigwave Robotics Fome',
        ko: '빅웨이브로보틱스 포미',
    },

    // 엔트리 정지시 하드웨어 초기화 로직
    setZero()
    {
        // 초기화
        Entry.BigwaveRoboticsBase.transferBufferClear();

        // 한 번에 명령을 전송하면 hw까지 제대로 전달되지 않는 경우가 있어
        // 명령을 각각 분리하여 전송하게 함(2017.01.03)
        for (let i = 0; i < 1; i++)
        {
            if( Entry.hw.portData['state_modeFlight'] == 0x10 )
            {
                Entry.BigwaveRoboticsBase.transferCommand(0x10, 0x01, 0); // 드론, command = 0x01 (Stop)
            }
            else
            {
                Entry.BigwaveRoboticsBase.transferCommand(0x10, 0x07, 0x12); // 0x12 : FlightEvent::Landing
            }

            Entry.BigwaveRoboticsBase.transferBuzzer(0x10, 0, 0, 0);
            Entry.BigwaveRoboticsBase.transferBuzzer(0x20, 0, 0, 0);
            Entry.BigwaveRoboticsBase.transferVibrator(0x20, 0, 0, 0, 0);
            Entry.BigwaveRoboticsBase.transferLightManual(0x10, 0xffff, 0); // LED 초기화(모두 꺼짐)
            Entry.BigwaveRoboticsBase.transferLightManual(0x20, 0xffff, 0); // LED 초기화(모두 꺼짐)
            Entry.BigwaveRoboticsBase.transferLightModeColor(0x10, 0x22, 200, 255, 0, 0); // LED 초기화(드론)
            Entry.BigwaveRoboticsBase.transferLightModeColor(0x20, 0x22, 200, 255, 0, 0); // LED 초기화(조종기)
        }
    },
};


/***************************************************************************************
 *  언어 적용
 ***************************************************************************************/
Entry.BigwaveRoboticsFome.setLanguage = function() {
    return {
        ko: {
            // ko.js에 작성하던 내용
            Blocks: {
                // 정보창
                monitor_state_modeFlight                        : '비행 모드',
                monitor_state_modeControlFlight                 : '비행 제어기 모드',
                monitor_state_modeMovement                      : '이동 상태',
                monitor_state_headless                          : '헤드리스',
                monitor_state_controlSpeed                      : '제어 속도',
                monitor_state_sensorOrientation                 : '센서 방향',
                monitor_state_battery                           : '배터리',
                monitor_motion_accelX                           : '가속도 X',
                monitor_motion_accelY                           : '가속도 Y',
                monitor_motion_accelZ                           : '가속도 Z',
                monitor_motion_gyroRoll                         : '자이로 Roll',
                monitor_motion_gyroPitch                        : '자이로 Pitch',
                monitor_motion_gyroYaw                          : '자이로 Yaw',
                monitor_motion_angleRoll                        : '자세 Roll',
                monitor_motion_anglePitch                       : '자세 Pitch',
                monitor_motion_angleYaw                         : '자세 Yaw',
                monitor_range_front                             : '정면 거리 센서',
                monitor_range_bottom                            : '바닥 거리 센서',
                monitor_cardColor_frontHue                      : '카드 위 색상',
                monitor_cardColor_frontSaturation               : '카드 위 채도',
                monitor_cardColor_frontValue                    : '카드 위 명도',
                monitor_cardColor_frontLightness                : '카드 위 밝기',
                monitor_cardColor_rearHue                       : '카드 아래 색상',
                monitor_cardColor_rearSaturation                : '카드 아래 채도',
                monitor_cardColor_rearValue                     : '카드 아래 명도',
                monitor_cardColor_rearLightness                 : '카드 아래 밝기',
                monitor_cardColor_frontColor                    : '카드 위 색',
                monitor_cardColor_rearColor                     : '카드 아래 색',
                monitor_cardColor_card                          : '카드',
                monitor_informationAssembledForEntry_positionX  : '위치 X',
                monitor_informationAssembledForEntry_positionY  : '위치 Y',
                monitor_informationAssembledForEntry_positionZ  : '위치 Z',
                monitor_informationAssembledForEntry_altitude   : '고도',
                monitor_informationAssembledForEntry_rangeHeight: '거리 센서의 높이',
                monitor_joystick_left_x                         : '왼쪽 조이스틱 X',
                monitor_joystick_left_y                         : '왼쪽 조이스틱 Y',
                monitor_joystick_left_direction                 : '왼쪽 조이스틱 방향',
                monitor_joystick_left_event                     : '왼쪽 조이스틱 이벤트',
                monitor_joystick_right_x                        : '오른쪽 조이스틱 X',
                monitor_joystick_right_y                        : '오른쪽 조이스틱 Y',
                monitor_joystick_right_direction                : '오른쪽 조이스틱 방향',
                monitor_joystick_right_event                    : '오른쪽 조이스틱 이벤트',
                monitor_button_button                           : '버튼',
                monitor_button_event                            : '버튼 이벤트',
                monitorCountTransferReserved           : '전송 예정 데이터',

                // 일반 블럭
                common_left                             : '왼쪽',
                common_right                            : '오른쪽',
                common_roll                             : 'Roll',
                common_pitch                            : 'Pitch',
                common_yaw                              : 'Yaw',
                common_throttle                         : 'Throttle',
                common_drone                            : '드론',
                common_controller                       : '조종기',
                drone_headless_normal                   : 'off (숙련자용)',
                drone_headless_headless                 : 'on (초보자용)',
                drone_light_color_body                  : '몸체',
                drone_light_manual_body_blue            : '파랑',
                drone_light_manual_body_green           : '초록',
                drone_light_manual_body_red             : '빨강',
                drone_motor_rotation_clockwise          : '시계 방향',
                drone_motor_rotation_counterclockwise   : '반시계 방향',
                drone_altitude                          : '해발고도',
                drone_range_height                      : '바닥과의 거리',
                drone_range_front                       : '정면과의 거리',
                drone_cardcolor_front_hue               : '앞 색상',
                drone_cardcolor_front_saturation        : '앞 채도',
                drone_cardcolor_front_value             : '앞 명도',
                drone_cardcolor_front_lightness         : '앞 밝기',
                drone_cardcolor_rear_hue                : '뒤 색상',
                drone_cardcolor_rear_saturation         : '뒤 채도',
                drone_cardcolor_rear_value              : '뒤 명도',
                drone_cardcolor_rear_lightness          : '뒤 밝기',
                drone_cardcolor_front_color             : '앞 카드 색',
                drone_cardcolor_rear_color              : '뒤 카드 색',
                drone_cardcolor_card                    : '카드',
                drone_state_mode_system                 : '시스템 모드',
                drone_state_mode_flight                 : '비행 동작 상태',
                drone_state_mode_control_flight         : '비행 제어 모드',
                drone_state_mode_movement               : '이동 상태',
                drone_state_headless                    : 'Headless',
                drone_state_control_speed               : '제어 속도',
                drone_state_sensor_orientation          : '센서 방향',
                drone_state_battery                     : '배터리',
                entryhw_count_transfer_reserved         : '전송 예약된 데이터 수',
            },

            template: {
                BigwaveRoboticsFome_control_headless              : 'Headless mode %1 %2',
                BigwaveRoboticsFome_control_drone_landing         : '드론 착륙 %1',
                BigwaveRoboticsFome_control_drone_reset_heading   : '드론 방향 초기화 %1',
                BigwaveRoboticsFome_control_drone_stop            : '드론 정지 %1',
                BigwaveRoboticsFome_control_drone_takeoff         : '드론 이륙 %1',
                BigwaveRoboticsFome_control_quad_one              : '드론 %1 %2% 정하기 %3',
                BigwaveRoboticsFome_control_quad_one_delay        : '드론 %1 %2% %3 초 실행 %4',
                BigwaveRoboticsFome_control_quad                  : '드론 Roll %1%, Pitch %2%, Yaw %3%, Throttle %4% 정하기 %5',
                BigwaveRoboticsFome_control_quad_delay            : '드론 Roll %1%, Pitch %2%, Yaw %3%, Throttle %4% %5초 실행 %6',
                BigwaveRoboticsFome_control_position_one          : '드론 %1(으)로 %2m를 %3m/s로 이동 %4',
                BigwaveRoboticsFome_control_position_turn         : '드론 %1(으)로 %2도를 %3deg/s로 회전 %4',
                BigwaveRoboticsFome_control_position_location     : '드론 %1 %2m, %3 %4m, %5 %6m를 %7m/s로 이동 %8',
                BigwaveRoboticsFome_control_position_location_turn: '드론 %1 %2m, %3 %4m, %5 %6m를 %7m/s로 이동, %8 %9도를 %10deg/s로 회전 %11',
                BigwaveRoboticsFome_light_color_input             : '드론 LED R %1, G %2, B %3 %4 %5 %6',
                BigwaveRoboticsFome_light_color_select            : '드론 LED %1 %2 %3 %4',
                BigwaveRoboticsFome_light_color_preset            : '드론 LED %1 %2 %3',
                BigwaveRoboticsFome_light_manual_single_input     : '드론 LED %1 밝기 %2 %3',
                BigwaveRoboticsFome_light_manual_single_off       : '드론 LED 끄기 %1',
                BigwaveRoboticsFome_motor_stop                    : '드론 모터 정지 %1',
                BigwaveRoboticsFome_motorsingle                   : '드론 %1번 모터를 %2(으)로 회전 %3',
                BigwaveRoboticsFome_motorsingle_input             : '드론 %1번 모터를 %2(으)로 회전 %3',
                BigwaveRoboticsFome_value_attitude                : '%1',
                BigwaveRoboticsFome_value_motion                  : '%1',
                BigwaveRoboticsFome_value_position                : '%1',
                BigwaveRoboticsFome_value_sensor                  : '%1',
                BigwaveRoboticsFome_value_card                    : '%1',
                BigwaveRoboticsFome_value_etc                     : '%1',
            },

            Helper: {
                BigwaveRoboticsFome_control_headless              : "<br>드론 좌표 기준을 변경합니다. Headless mode 선택을 on으로 하면 이륙 시와 '방향초기화'를 했을 때 드론이 바라보는 방향을 기준으로 앞뒤좌우가 고정됩니다. 이 때에는 Yaw를 조작하여 드론이 다른 방향을 보게 하여도 처음 지정한 방향을 기준으로 앞뒤좌우로 움직입니다. 사용자가 바라보는 방향과 드론의 기준 방향이 같을 때 조작하기 편리한 장점이 있습니다.<br>Headless mode를 off로 선택하면 현재 드론이 바라보는 방향을 기준으로 앞뒤좌우가 결정됩니다. 드론의 움직임에 따라 앞뒤좌우가 계속 바뀌기 때문에 익숙해지기 전까지는 사용하기 어려울 수 있습니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#좌표기준</font>",
                BigwaveRoboticsFome_control_drone_landing         : "<br>드론을 착륙시킵니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#착륙</font>",
                BigwaveRoboticsFome_control_drone_reset_heading   : "<br>드론의 방향을 초기화합니다. 앱솔루트 모드인 경우 현재 드론이 바라보는 방향을 0도로 변경합니다. 일반 모드에서는 아무런 영향이 없습니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#방향초기화</font>",
                BigwaveRoboticsFome_control_drone_stop            : "<br>드론 작동을 정지합니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#정지</font>",
                BigwaveRoboticsFome_control_drone_takeoff         : "<br>드론을 이륙시킵니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#이륙</font>",
                BigwaveRoboticsFome_control_quad                  : "<br>드론 조종 값을 지정합니다. 입력 가능한 값의 범위는 -100 ~ 100입니다. 정지 상태에서 Throttle 값을 50이상으로 지정하면 드론이 이륙합니다. 명령 전달 후 바로 다음 블럭으로 넘어갑니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#조종</font>",
                BigwaveRoboticsFome_control_quad_delay            : "<br>드론 조종 값을 지정합니다. 입력 가능한 값의 범위는 -100 ~ 100입니다. 정지 상태에서 Throttle 값을 50이상으로 지정하면 드론이 이륙합니다. 지정한 시간이 지나면 해당 조종 값을 0으로 변경합니다. 지정한 시간이 끝날 때까지 다음 블럭으로 넘어가지 않습니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#조종</font> <font color='forestgreen'>#시간지연</font>",
                BigwaveRoboticsFome_control_quad_one              : "<br>드론 조종 값을 지정합니다. 입력 가능한 값의 범위는 -100 ~ 100입니다. 정지 상태에서 Throttle 값을 50이상으로 지정하면 드론이 이륙합니다. 명령 전달 후 바로 다음 블럭으로 넘어갑니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#조종</font>",
                BigwaveRoboticsFome_control_quad_one_delay        : "<br>드론 조종 값을 지정합니다. 입력 가능한 값의 범위는 -100 ~ 100입니다. 정지 상태에서 Throttle 값을 50이상으로 지정하면 드론이 이륙합니다. 지정한 시간이 지나면 해당 조종 값을 0으로 변경합니다. 지정한 시간이 끝날 때까지 다음 블럭으로 넘어가지 않습니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#조종</font> <font color='forestgreen'>#시간지연</font>",
                BigwaveRoboticsFome_control_position_one          : "<br>드론의 방향과 거리, 이동 속도를 지정하여 지정한 위치로 이동합니다. 거리를 속도로 나누어 얻은 시간에 1.2를 곱한 시간만큼 해당 블럭에 머뭅니다. <br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#이동</font> <font color='forestgreen'>#시간지연</font>",
                BigwaveRoboticsFome_control_position_turn         : "<br>드론의 회전 방향과 각도, 회전 속도를 지정하여 지정한 각도로 회전합니다. 목표 각도를 회전 속도로 나누어 얻은 시간에 1.2를 곱한 시간만큼 해당 블럭에 머뭅니다. <br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#회전</font> <font color='forestgreen'>#시간지연</font>",
                BigwaveRoboticsFome_control_position_location     : "<br>드론의 X, Y, Z 축의 방향과 거리, 이동 속도를 설정하여 지정한 위치로 이동합니다. 거리를 속도로 나누어 얻은 시간에 1.2를 곱한 시간만큼 해당 블럭에 머뭅니다. <br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#이동</font> <font color='forestgreen'>#시간지연</font>",
                BigwaveRoboticsFome_control_position_location_turn: "<br>드론의 X, Y, Z 축의 방향과 거리, 이동 속도, 회전 방향과 목표 각도, 회전 속도를 설정하여 지정한 위치로의 이동과 회전을 실행합니다. 거리를 속도로 나누어 얻은 시간에 1.2를 곱한 시간 또는 목표 각도를 회전 속도로 나누어 얻은 시간에 1.2를 곱한 시간 중에 긴 시간만큼 해당 블럭에 머뭅니다. <br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#이동</font> <font color='forestgreen'>#시간지연</font>",
                BigwaveRoboticsFome_light_color_input             : "<br>빛의 삼원색인 Red, Green, Blue 값을 지정하여 드론의 눈 또는 팔 LED의 색상을 원하는대로 만들 수 있습니다.<br>10진수(0 ~ 255) 값을 사용합니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#LED제어</font>",
                BigwaveRoboticsFome_light_color_select            : "<br>RGB 색지정 블록을 이용해서 만들 수 있는<br> 드론 LED 예시입니다.<br>RGB 색지정 블록을 이용해서 멋진 색깔을<br> 다양하게 만들어보세요.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#LED제어</font>",
                BigwaveRoboticsFome_light_color_preset            : "<br>드론의 LED를 조작하는데 사용합니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#LED제어</font>",
                BigwaveRoboticsFome_light_manual_single_input     : "<br>드론 LED를 조작하는데 사용합니다.<br>10진수(0 ~ 255), 16진수(0x00 ~ 0xFF) 값을 사용할 수 있습니다.<br>2진수로 표현한 값에서 각각의 비트는 LED를 선택하는 스위치 역할을 합니다.<br>밝기 값은 0 ~ 255 사이의 값을 사용할 수 있습니다.<br>값이 커질수록 더 밝아집니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#LED제어</font>",
                BigwaveRoboticsFome_light_manual_single_off       : "<br>드론의 모든 LED를 끕니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#LED끄기</font>",
                BigwaveRoboticsFome_motor_stop                    : "<br>모든 모터의 작동을 정지합니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#모터정지</font>",
                BigwaveRoboticsFome_motorsingle                   : "<br>모터 제어 블럭입니다.<br>모터의 순서는 12시 방향부터 차례대로 1(앞 오른쪽), 2(뒤 오른쪽), 3(뒤 왼쪽), 4(앞 왼쪽) 입니다.<br>모터 회전에 사용 가능한 값의 범위는 0 ~ 4095입니다. <br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#모터제어</font>",
                BigwaveRoboticsFome_motorsingle_input             : "<br>모터 제어 블럭입니다.<br>모터의 순서는 12시 방향부터 차례대로 1(앞 오른쪽), 2(뒤 오른쪽), 3(뒤 왼쪽), 4(앞 왼쪽) 입니다.<br>모터 회전에 사용 가능한 값의 범위는 0 ~ 4095입니다. <br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#모터제어</font>",
                BigwaveRoboticsFome_value_attitude                : "<br>드론의 현재 자세를 각도로 반환합니다. Roll은 좌우 기울기(-90 ~ 90), Pitch는 앞뒤 기울기(-90 ~ 90), Yaw는 회전 각도(-180 ~ 180) 입니다.<br><br><font color='crimson'>#값</font> <font color='dodgerblue'>#드론</font> <font color='forestgreen'>#자세</font>",
                BigwaveRoboticsFome_value_etc                     : "<br>드론 설정과 관련된 값들과 적외선 통신으로 받은 값을 반환합니다.<br><br><font color='crimson'>#값</font> <font color='dodgerblue'>#드론</font> <font color='forestgreen'>#기타</font>",
                BigwaveRoboticsFome_value_motion                  : "<br>드론 IMU센서와 관련된 값들을 반환합니다.<br>(병진운동) 가속도는 x, y, z축에 대한 중력가속도입니다. 1g = 9.8m/s^2<br>(회전운동) 각속도는 x, y, z축을 기준으로 회전하는 속력을 나타내는 벡터입니다.(pitch, roll, yaw) <br><br><font color='crimson'>#값</font> <font color='dodgerblue'>#드론</font> <font color='forestgreen'>#IMU센서</font> <font color='crimson'>#가속도</font> <font color='dodgerblue'>#병진운동</font> <font color='crimson'>#각속도</font> <font color='dodgerblue'>#회전운동</font>",
                BigwaveRoboticsFome_value_position                : "<br>드론 위치와 관련된 값들을 반환합니다.(단위:m)<br><br><font color='crimson'>#값</font> <font color='dodgerblue'>#드론</font> <font color='forestgreen'>#위치</font>",
                BigwaveRoboticsFome_value_sensor                  : "<br>드론 거리 및 고도 센서와 관련된 값들을 반환합니다(단위:m)<br>거리 센서의 유효 측정 거리는 2m입니다.<br><br><font color='crimson'>#값</font> <font color='dodgerblue'>#드론</font> <font color='forestgreen'>#센서</font> <font color='crimson'>#거리센서</font> <font color='dodgerblue'>#대기압</font>",
                BigwaveRoboticsFome_value_card                    : "<br>드론 카드 센서와 관련된 값들을 반환합니다.<br><br><font color='crimson'>#드론</font> <font color='dodgerblue'>#카드</font>",
            },
        },

        en: {
            Blocks: {
                // 정보창
                monitorCountTransferReserved            : 'Transfer Buffer',

                // 일반 블럭
                common_left                             : 'left',
                common_right                            : 'right',
                common_roll                             : 'Roll',
                common_pitch                            : 'Pitch',
                drone_state_mode_system                 : 'System Mode',
                drone_state_mode_flight                 : 'Flight Mode',
                drone_state_mode_control_flight         : 'Flight Control Mode',
                drone_state_mode_movement               : 'mode movement',
                drone_state_headless                    : 'Headless',
                drone_state_control_speed               : 'Speed',
                drone_state_sensor_orientation          : 'Sensor direction',
                drone_state_battery                     : 'Battery',
                entryhw_count_transfer_reserved         : 'Reserved data for transfer',
            },

            template: {
                BigwaveRoboticsFome_control_headless              : 'Headless mode %1 %2',
                BigwaveRoboticsFome_control_drone_landing         : 'Landing %1',
                BigwaveRoboticsFome_control_drone_reset_heading   : 'Reset heading %1',
                BigwaveRoboticsFome_control_drone_stop            : 'Stop flight %1',
                BigwaveRoboticsFome_control_drone_takeoff         : 'Takeoff %1',
                BigwaveRoboticsFome_control_quad_one              : 'Set %1 %2% %3',
                BigwaveRoboticsFome_control_quad_one_delay        : 'Set %1 %2% %3 sec %4',
                BigwaveRoboticsFome_control_quad                  : 'Set Roll %1%, Pitch %2%, Yaw %3%, Throttle %4% %5',
                BigwaveRoboticsFome_control_quad_delay            : 'Set Roll %1%, Pitch %2%, Yaw %3%, Throttle %4% for %5sec %6',
                BigwaveRoboticsFome_control_position_one          : 'Move %2 meter(s) %1 to %3 m/s %4',
                BigwaveRoboticsFome_control_position_turn         : 'Rotate %2 degree(s) %1 to %3 deg/s %4',
                BigwaveRoboticsFome_control_position_location     : 'Move %2 meter(s) %1, %4 meter(s) %3, %6 meter(s) %5 to %7 m/s %8',
                BigwaveRoboticsFome_control_position_location_turn: 'Move %2 meter(s) %1, %4 meter(s) %3, %6 meter(s) %5 to %7 m/s, Rotate %9 degree(s) %8 to %10 deg/s %11',
                BigwaveRoboticsFome_light_color_input             : 'Drone LED R %1, G %2, B %3 %4 %5 %6',
                BigwaveRoboticsFome_light_color_select            : 'Drone LED Preset %1 %2 %3 %4',
                BigwaveRoboticsFome_light_color_preset            : 'Drone LED %1 %2 %3',
                BigwaveRoboticsFome_light_manual_single_input     : 'Drone LED %1 lightness %2 %3',
                BigwaveRoboticsFome_light_manual_single_off       : 'Drone LED Off %1',
                BigwaveRoboticsFome_motor_stop                    : 'Motor stop %1',
                BigwaveRoboticsFome_motorsingle                   : 'No. %1 Motor rotate for %2 %3',
                BigwaveRoboticsFome_motorsingle_input             : 'No. %1 Motor rotate for %2 %3',
                BigwaveRoboticsFome_value_attitude                : '%1',
                BigwaveRoboticsFome_value_motion                  : '%1',
                BigwaveRoboticsFome_value_position                : '%1',
                BigwaveRoboticsFome_value_sensor                  : '%1',
                BigwaveRoboticsFome_value_card                    : '%1',
                BigwaveRoboticsFome_value_etc                     : '%1',
            },

            Helper: {
                BigwaveRoboticsFome_control_headless              : '',
                BigwaveRoboticsFome_control_drone_landing         : '',
                BigwaveRoboticsFome_control_drone_reset_heading   : '',
                BigwaveRoboticsFome_control_drone_stop            : '',
                BigwaveRoboticsFome_control_drone_takeoff         : '',
                BigwaveRoboticsFome_control_quad                  : '',
                BigwaveRoboticsFome_control_quad_delay            : '',
                BigwaveRoboticsFome_control_quad_one              : '',
                BigwaveRoboticsFome_control_quad_one_delay        : '',
                BigwaveRoboticsFome_control_position_one          : '',
                BigwaveRoboticsFome_control_position_turn         : '',
                BigwaveRoboticsFome_control_position_location     : '',
                BigwaveRoboticsFome_control_position_location_turn: '',
                BigwaveRoboticsFome_light_color_input             : '',
                BigwaveRoboticsFome_light_color_select            : '',
                BigwaveRoboticsFome_light_color_preset            : '',
                BigwaveRoboticsFome_light_manual_single_input     : '',
                BigwaveRoboticsFome_light_manual_single_off       : '',
                BigwaveRoboticsFome_motor_stop                    : '',
                BigwaveRoboticsFome_motorsingle                   : '',
                BigwaveRoboticsFome_motorsingle_input             : '',
                BigwaveRoboticsFome_value_attitude                : '',
                BigwaveRoboticsFome_value_etc                     : '',
                BigwaveRoboticsFome_value_motion                  : '',
                BigwaveRoboticsFome_value_position                : '',
                BigwaveRoboticsFome_value_sensor                  : '',
                BigwaveRoboticsFome_value_card                    : '',
            },
        },
    };
};


// Entry 좌측 하단 하드웨어 모니터 화면에 표시하는 속성
// listPorts와 ports 두 곳 동시에 동일한 속성을 표시할 수는 없음
Entry.BigwaveRoboticsFome.monitorTemplate = function()
{
    return {
        /* 센서창 가림 현상을 해결하기 위해서 주석 처리함(2017.11.06)
        imgPath: "hw/BigwaveRoboticsFome.png",   // 배경 이미지
        width  : 256,                        // 이미지의 폭
        height : 256,                        // 이미지의 높이
        */

        // 모니터 화면 상단에 차례대로 나열하는 값
        listPorts: {
            state_modeFlight                        : { name: Lang.Blocks.monitor_state_modeFlight,                          type: 'input', pos: { x: 0, y: 0 } },
            state_modeControlFlight                 : { name: Lang.Blocks.monitor_state_modeControlFlight,                   type: 'input', pos: { x: 0, y: 0 } },
            state_modeMovement                      : { name: Lang.Blocks.monitor_state_modeMovement,                        type: 'input', pos: { x: 0, y: 0 } },
            state_headless                          : { name: Lang.Blocks.monitor_state_headless,                            type: 'input', pos: { x: 0, y: 0 } },
            state_controlSpeed                      : { name: Lang.Blocks.monitor_state_controlSpeed,                        type: 'input', pos: { x: 0, y: 0 } },
            state_sensorOrientation                 : { name: Lang.Blocks.monitor_state_sensorOrientation,                   type: 'input', pos: { x: 0, y: 0 } },
            state_battery                           : { name: Lang.Blocks.monitor_state_battery,                             type: 'input', pos: { x: 0, y: 0 } },
            motion_accelX                           : { name: Lang.Blocks.monitor_motion_accelX,                             type: 'input', pos: { x: 0, y: 0 } },
            motion_accelY                           : { name: Lang.Blocks.monitor_motion_accelY,                             type: 'input', pos: { x: 0, y: 0 } },
            motion_accelZ                           : { name: Lang.Blocks.monitor_motion_accelZ,                             type: 'input', pos: { x: 0, y: 0 } },
            motion_gyroRoll                         : { name: Lang.Blocks.monitor_motion_gyroRoll,                           type: 'input', pos: { x: 0, y: 0 } },
            motion_gyroPitch                        : { name: Lang.Blocks.monitor_motion_gyroPitch,                          type: 'input', pos: { x: 0, y: 0 } },
            motion_gyroYaw                          : { name: Lang.Blocks.monitor_motion_gyroYaw,                            type: 'input', pos: { x: 0, y: 0 } },
            motion_angleRoll                        : { name: Lang.Blocks.monitor_motion_angleRoll,                          type: 'input', pos: { x: 0, y: 0 } },
            motion_anglePitch                       : { name: Lang.Blocks.monitor_motion_anglePitch,                         type: 'input', pos: { x: 0, y: 0 } },
            motion_angleYaw                         : { name: Lang.Blocks.monitor_motion_angleYaw,                           type: 'input', pos: { x: 0, y: 0 } },
            range_front                             : { name: Lang.Blocks.monitor_range_front,                               type: 'input', pos: { x: 0, y: 0 } },
            range_bottom                            : { name: Lang.Blocks.monitor_range_bottom,                              type: 'input', pos: { x: 0, y: 0 } },
            cardColor_frontHue                      : { name: Lang.Blocks.monitor_cardColor_frontHue,                        type: 'input', pos: { x: 0, y: 0 } },
            cardColor_frontSaturation               : { name: Lang.Blocks.monitor_cardColor_frontSaturation,                 type: 'input', pos: { x: 0, y: 0 } },
            cardColor_frontValue                    : { name: Lang.Blocks.monitor_cardColor_frontValue,                      type: 'input', pos: { x: 0, y: 0 } },
            cardColor_frontLightness                : { name: Lang.Blocks.monitor_cardColor_frontLightness,                  type: 'input', pos: { x: 0, y: 0 } },
            cardColor_rearHue                       : { name: Lang.Blocks.monitor_cardColor_rearHue,                         type: 'input', pos: { x: 0, y: 0 } },
            cardColor_rearSaturation                : { name: Lang.Blocks.monitor_cardColor_rearSaturation,                  type: 'input', pos: { x: 0, y: 0 } },
            cardColor_rearValue                     : { name: Lang.Blocks.monitor_cardColor_rearValue,                       type: 'input', pos: { x: 0, y: 0 } },
            cardColor_rearLightness                 : { name: Lang.Blocks.monitor_cardColor_rearLightness,                   type: 'input', pos: { x: 0, y: 0 } },
            cardColor_frontColor                    : { name: Lang.Blocks.monitor_cardColor_frontColor,                      type: 'input', pos: { x: 0, y: 0 } },
            cardColor_rearColor                     : { name: Lang.Blocks.monitor_cardColor_rearColor,                       type: 'input', pos: { x: 0, y: 0 } },
            cardColor_card                          : { name: Lang.Blocks.monitor_cardColor_card,                            type: 'input', pos: { x: 0, y: 0 } },
            informationAssembledForEntry_positionX  : { name: Lang.Blocks.monitor_informationAssembledForEntry_positionX,    type: 'input', pos: { x: 0, y: 0 } },
            informationAssembledForEntry_positionY  : { name: Lang.Blocks.monitor_informationAssembledForEntry_positionY,    type: 'input', pos: { x: 0, y: 0 } },
            informationAssembledForEntry_positionZ  : { name: Lang.Blocks.monitor_informationAssembledForEntry_positionZ,    type: 'input', pos: { x: 0, y: 0 } },
            informationAssembledForEntry_altitude   : { name: Lang.Blocks.monitor_informationAssembledForEntry_altitude,     type: 'input', pos: { x: 0, y: 0 } },
            informationAssembledForEntry_rangeHeight: { name: Lang.Blocks.monitor_informationAssembledForEntry_rangeHeight,  type: 'input', pos: { x: 0, y: 0 } },
            joystick_left_x                         : { name: Lang.Blocks.monitor_joystick_left_x,                           type: 'input', pos: { x: 0, y: 0 } },
            joystick_left_y                         : { name: Lang.Blocks.monitor_joystick_left_y,                           type: 'input', pos: { x: 0, y: 0 } },
            joystick_left_direction                 : { name: Lang.Blocks.monitor_joystick_left_direction,                   type: 'input', pos: { x: 0, y: 0 } },
            joystick_left_event                     : { name: Lang.Blocks.monitor_joystick_left_event,                       type: 'input', pos: { x: 0, y: 0 } },
            joystick_right_x                        : { name: Lang.Blocks.monitor_joystick_right_x,                          type: 'input', pos: { x: 0, y: 0 } },
            joystick_right_y                        : { name: Lang.Blocks.monitor_joystick_right_y,                          type: 'input', pos: { x: 0, y: 0 } },
            joystick_right_direction                : { name: Lang.Blocks.monitor_joystick_right_direction,                  type: 'input', pos: { x: 0, y: 0 } },
            joystick_right_event                    : { name: Lang.Blocks.monitor_joystick_right_event,                      type: 'input', pos: { x: 0, y: 0 } },
            button_button                           : { name: Lang.Blocks.monitor_button_button,                             type: 'input', pos: { x: 0, y: 0 } },
            button_event                            : { name: Lang.Blocks.monitor_button_event,                              type: 'input', pos: { x: 0, y: 0 } },
            entryhw_countTransferReserved           : { name: Lang.Blocks.monitorCountTransferReserved,             type: 'output', pos: { x: 0, y: 0 } },
        },

        // 모니터 화면 지정 위치와 선으로 연결하여 표시하는 값
        ports: {},

        mode: 'both',   // 표시 모드
    };
};


/***************************************************************************************
 *  엔트리에 등록할 블록들의 블록명(다른 장치의 블록 이름과 달라야 함)
 ***************************************************************************************/
Entry.BigwaveRoboticsFome.blockMenuBlocks = [
    'BigwaveRoboticsFome_value_attitude',
    'BigwaveRoboticsFome_value_motion',
    'BigwaveRoboticsFome_value_position',
    'BigwaveRoboticsFome_value_sensor',
    'BigwaveRoboticsFome_value_card',
    'BigwaveRoboticsFome_value_etc',
    'BigwaveRobotics_drone_8_controller_value_button',
    'BigwaveRobotics_drone_8_controller_value_joystick',
    'BigwaveRobotics_drone_8_controller_if_button_press',
    'BigwaveRobotics_drone_8_controller_if_joystick_direction',
    'BigwaveRoboticsFome_control_drone_takeoff',
    'BigwaveRoboticsFome_control_drone_landing',
    'BigwaveRoboticsFome_control_drone_stop',
    'BigwaveRoboticsFome_control_headless',
    'BigwaveRoboticsFome_control_drone_reset_heading',
    'BigwaveRoboticsFome_control_quad_one',
    'BigwaveRoboticsFome_control_quad_one_delay',
    'BigwaveRoboticsFome_control_quad',
    'BigwaveRoboticsFome_control_quad_delay',
    'BigwaveRoboticsFome_control_position_one',
    'BigwaveRoboticsFome_control_position_turn',
    'BigwaveRoboticsFome_control_position_location',
    'BigwaveRoboticsFome_control_position_location_turn',
    'BigwaveRoboticsFome_motor_stop',
    'BigwaveRoboticsFome_motorsingle',
    'BigwaveRoboticsFome_motorsingle_input',
    'BigwaveRoboticsFome_light_manual_single_off',
    'BigwaveRoboticsFome_light_manual_single_input',
    'BigwaveRoboticsFome_light_color_preset',
    'BigwaveRoboticsFome_light_color_input',
    'BigwaveRoboticsFome_light_color_select',
    'BigwaveRobotics_drone_8_controller_light_manual_single_off',
    'BigwaveRobotics_drone_8_controller_light_manual_single_input',
    'BigwaveRobotics_drone_8_controller_light_color_preset',
    'BigwaveRobotics_drone_8_controller_light_color_input',
    'BigwaveRobotics_drone_8_controller_light_color_select',
    'BigwaveRobotics_drone_8_controller_display_clear_all',
    'BigwaveRobotics_drone_8_controller_display_clear',
    'BigwaveRobotics_drone_8_controller_display_draw_point',
    'BigwaveRobotics_drone_8_controller_display_draw_line',
    'BigwaveRobotics_drone_8_controller_display_draw_rect',
    'BigwaveRobotics_drone_8_controller_display_draw_circle',
    'BigwaveRobotics_drone_8_controller_display_draw_string',
    'BigwaveRobotics_drone_8_controller_display_draw_string_align',
    'BigwaveRobotics_drone_8_controller_buzzer_off',
    'BigwaveRobotics_drone_8_controller_buzzer_scale',
    'BigwaveRobotics_drone_8_controller_buzzer_scale_delay',
    'BigwaveRobotics_drone_8_controller_buzzer_scale_reserve',
    'BigwaveRobotics_drone_8_controller_buzzer_hz',
    'BigwaveRobotics_drone_8_controller_buzzer_hz_delay',
    'BigwaveRobotics_drone_8_controller_buzzer_hz_reserve',
    'BigwaveRobotics_drone_8_controller_vibrator_off',
    'BigwaveRobotics_drone_8_controller_vibrator_on_delay',
    'BigwaveRobotics_drone_8_controller_vibrator_on_reserve',
    'BigwaveRobotics_drone_8_controller_vibrator_delay',
    'BigwaveRobotics_drone_8_controller_vibrator_reserve',
];


/***************************************************************************************
 *  엔트리 블록 정의
 ***************************************************************************************/
Entry.BigwaveRoboticsFome.getBlocks = function()
{
    return {
        BigwaveRoboticsFome_value_attitude: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_attitude_roll,   'motion_angleRoll'],
                        [Lang.Blocks.drone_attitude_pitch,  'motion_anglePitch'],
                        [Lang.Blocks.drone_attitude_yaw,    'motion_angleYaw'],
                    ],
                    value     : 'motion_angleRoll',                            // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRoboticsFome_value_attitude',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.attitude(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_attitude_roll,   'motion_angleRoll'],
                                    [Lang.Blocks.drone_attitude_pitch,  'motion_anglePitch'],
                                    [Lang.Blocks.drone_attitude_yaw,    'motion_angleYaw'],
                                ],
                                value     : 'motion_angleRoll',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_value_motion: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_accel_x,     'motion_accelX'],
                        [Lang.Blocks.drone_accel_y,     'motion_accelY'],
                        [Lang.Blocks.drone_accel_z,     'motion_accelZ'],
                        [Lang.Blocks.drone_gyro_roll,   'motion_gyroRoll'],
                        [Lang.Blocks.drone_gyro_pitch,  'motion_gyroPitch'],
                        [Lang.Blocks.drone_gyro_yaw,    'motion_gyroYaw'],
                    ],
                    value     : 'motion_accelX',                               // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRoboticsFome_value_motion',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.motion(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_accel_x,     'motion_accelX'],
                                    [Lang.Blocks.drone_accel_y,     'motion_accelY'],
                                    [Lang.Blocks.drone_accel_z,     'motion_accelZ'],
                                    [Lang.Blocks.drone_gyro_roll,   'motion_gyroRoll'],
                                    [Lang.Blocks.drone_gyro_pitch,  'motion_gyroPitch'],
                                    [Lang.Blocks.drone_gyro_yaw,    'motion_gyroYaw'],
                                ],
                                value     : 'motion_accelX',                               // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_value_position: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_positionX,       'informationAssembledForEntry_positionX'],
                        [Lang.Blocks.drone_positionY,       'informationAssembledForEntry_positionY'],
                        [Lang.Blocks.drone_positionZ,       'informationAssembledForEntry_positionZ'],
                    ],
                    value     : 'informationAssembledForEntry_positionX',      // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRoboticsFome_value_position',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.position(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_positionX,       'informationAssembledForEntry_positionX'],
                                    [Lang.Blocks.drone_positionY,       'informationAssembledForEntry_positionY'],
                                    [Lang.Blocks.drone_positionZ,       'informationAssembledForEntry_positionZ'],
                                ],
                                value     : 'informationAssembledForEntry_positionX',      // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_value_sensor: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_range_front,     'range_front'],
                        [Lang.Blocks.drone_range_height,    'informationAssembledForEntry_rangeHeight'],
                        [Lang.Blocks.drone_altitude,        'informationAssembledForEntry_altitude'],
                    ],
                    value     : 'range_front',                                 // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRoboticsFome_value_sensor',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.sensor(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_range_front,     'range_front'],
                                    [Lang.Blocks.drone_range_height,    'informationAssembledForEntry_rangeHeight'],
                                    [Lang.Blocks.drone_altitude,        'informationAssembledForEntry_altitude'],
                                ],
                                value     : 'range_front',                                 // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_value_card: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_cardcolor_front_color,            'cardColor_frontColor'],
                        [Lang.Blocks.drone_cardcolor_rear_color,             'cardColor_rearColor'],
                        [Lang.Blocks.drone_cardcolor_card,                   'cardColor_card'],
                        [Lang.Blocks.drone_cardcolor_front_hue,              'cardColor_frontHue'],
                        [Lang.Blocks.drone_cardcolor_front_saturation,       'cardColor_frontSaturation'],
                        [Lang.Blocks.drone_cardcolor_front_value,            'cardColor_frontValue'],
                        [Lang.Blocks.drone_cardcolor_front_lightness,        'cardColor_frontLightness'],
                        [Lang.Blocks.drone_cardcolor_rear_hue,               'cardColor_rearHue'],
                        [Lang.Blocks.drone_cardcolor_rear_saturation,        'cardColor_rearSaturation'],
                        [Lang.Blocks.drone_cardcolor_rear_value,             'cardColor_rearValue'],
                        [Lang.Blocks.drone_cardcolor_rear_lightness,         'cardColor_rearLightness'],
                    ],
                    value     : 'cardColor_frontColor',                        // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRoboticsFome_value_card',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.card(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_cardcolor_front_color,            'cardColor_frontColor'],
                                    [Lang.Blocks.drone_cardcolor_rear_color,             'cardColor_rearColor'],
                                    [Lang.Blocks.drone_cardcolor_card,                   'cardColor_card'],
                                    [Lang.Blocks.drone_cardcolor_front_hue,              'cardColor_frontHue'],
                                    [Lang.Blocks.drone_cardcolor_front_saturation,       'cardColor_frontSaturation'],
                                    [Lang.Blocks.drone_cardcolor_front_value,            'cardColor_frontValue'],
                                    [Lang.Blocks.drone_cardcolor_front_lightness,        'cardColor_frontLightness'],
                                    [Lang.Blocks.drone_cardcolor_rear_hue,               'cardColor_rearHue'],
                                    [Lang.Blocks.drone_cardcolor_rear_saturation,        'cardColor_rearSaturation'],
                                    [Lang.Blocks.drone_cardcolor_rear_value,             'cardColor_rearValue'],
                                    [Lang.Blocks.drone_cardcolor_rear_lightness,         'cardColor_rearLightness'],
                                ],
                                value     : 'cardColor_frontColor',                        // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_value_etc: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_state_mode_flight,           'state_modeFlight'],
                        [Lang.Blocks.drone_state_mode_control_flight,   'state_modeControlFlight'],
                        [Lang.Blocks.drone_state_mode_movement,         'state_modeMovement'],
                        [Lang.Blocks.drone_state_headless,              'state_headless'],
                        [Lang.Blocks.drone_state_control_speed,         'state_controlSpeed'],
                        [Lang.Blocks.drone_state_sensor_orientation,    'state_sensorOrientation'],
                        [Lang.Blocks.drone_state_battery,               'state_battery'],
                    ],
                    value     : 'state_battery',                               // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRoboticsFome_value_etc',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.state(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_state_mode_flight,           'state_modeFlight'],
                                    [Lang.Blocks.drone_state_mode_control_flight,   'state_modeControlFlight'],
                                    [Lang.Blocks.drone_state_mode_movement,         'state_modeMovement'],
                                    [Lang.Blocks.drone_state_headless,              'state_headless'],
                                    [Lang.Blocks.drone_state_control_speed,         'state_controlSpeed'],
                                    [Lang.Blocks.drone_state_sensor_orientation,    'state_sensorOrientation'],
                                    [Lang.Blocks.drone_state_battery,               'state_battery'],
                                ],
                                value     : 'state_battery',                               // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_value_button: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_button,         'button_button'],
                        [Lang.Blocks.controller_button_event,   'button_event'],
                    ],
                    value     : 'button_button',                               // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRobotics_drone_8_controller_value_button',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.button(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_button,         'button_button'],
                                    [Lang.Blocks.controller_button_event,   'button_event'],
                                ],
                                value     : 'button_button',                               // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_value_joystick: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic_string_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_joystick_left_x,            'joystick_left_x'],
                        [Lang.Blocks.controller_joystick_left_y,            'joystick_left_y'],
                        [Lang.Blocks.controller_joystick_left_direction,    'joystick_left_direction'],
                        [Lang.Blocks.controller_joystick_left_event,        'joystick_left_event'],
                        [Lang.Blocks.controller_joystick_right_x,           'joystick_right_x'],
                        [Lang.Blocks.controller_joystick_right_y,           'joystick_right_y'],
                        [Lang.Blocks.controller_joystick_right_direction,   'joystick_right_direction'],
                        [Lang.Blocks.controller_joystick_right_event,       'joystick_right_event'],
                    ],
                    value     : 'joystick_left_x',                             // 초기 선택항목 지정
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRobotics_drone_8_controller_value_joystick',
            },
            paramsKeyMap: {
                DEVICE: 0,
            },
            class   : 'monitor',             // 같은 이름인 객체들이 그룹으로 형성됨
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.hw.portData[script.getField('DEVICE')];
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.joystick(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_joystick_left_x,            'joystick_left_x'],
                                    [Lang.Blocks.controller_joystick_left_y,            'joystick_left_y'],
                                    [Lang.Blocks.controller_joystick_left_direction,    'joystick_left_direction'],
                                    [Lang.Blocks.controller_joystick_left_event,        'joystick_left_event'],
                                    [Lang.Blocks.controller_joystick_right_x,           'joystick_right_x'],
                                    [Lang.Blocks.controller_joystick_right_y,           'joystick_right_y'],
                                    [Lang.Blocks.controller_joystick_right_direction,   'joystick_right_direction'],
                                    [Lang.Blocks.controller_joystick_right_event,       'joystick_right_event'],
                                ],
                                value     : 'joystick_left_x',                             // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_if_button_press: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor : '#fff',
            skeleton  : 'basic_boolean_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_button_front_left_top,      '1'],
                        [Lang.Blocks.controller_button_front_left_bottom,   '2'],
                        [Lang.Blocks.controller_button_front_right_top,     '4'],
                        [Lang.Blocks.controller_button_front_right_bottom,  '8'],
                        [Lang.Blocks.controller_button_top_left,            '16'],
                        [Lang.Blocks.controller_button_top_right,           '32'],
                        [Lang.Blocks.controller_button_center_up,           '64'],
                        [Lang.Blocks.controller_button_center_left,         '128'],
                        [Lang.Blocks.controller_button_center_right,        '256'],
                        [Lang.Blocks.controller_button_center_down,         '512'],
                        [Lang.Blocks.controller_button_bottom_left,         '1024'],
                        [Lang.Blocks.controller_button_bottom_right,        '2048'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null],
                type  : 'BigwaveRobotics_drone_8_controller_if_button_press',
            },
            paramsKeyMap: {
                BUTTON: 0,
            },
            class   : 'boolean_input',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const read        = Entry.hw.portData;
                const button      = 'button_button';    // paramsKeyMap에 정의된 이름 사용
                const buttonevent = 'button_event';     // paramsKeyMap에 정의된 이름 사용

                if (read[button] == script.getField('BUTTON') && read[buttonevent] == 2) {
                    return true;
                } else {
                    return false;
                }
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.button_pressed(%1)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_button_front_left_top,      '1'],
                                    [Lang.Blocks.controller_button_front_left_bottom,   '2'],
                                    [Lang.Blocks.controller_button_front_right_top,     '4'],
                                    [Lang.Blocks.controller_button_front_right_bottom,  '8'],
                                    [Lang.Blocks.controller_button_top_left,            '16'],
                                    [Lang.Blocks.controller_button_top_right,           '32'],
                                    [Lang.Blocks.controller_button_center_up,           '64'],
                                    [Lang.Blocks.controller_button_center_left,         '128'],
                                    [Lang.Blocks.controller_button_center_right,        '256'],
                                    [Lang.Blocks.controller_button_center_down,         '512'],
                                    [Lang.Blocks.controller_button_bottom_left,         '1024'],
                                    [Lang.Blocks.controller_button_bottom_right,        '2048'],
                                ],
                                value     : '1',                                           // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_if_joystick_direction: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            fontColor : '#fff',
            skeleton  : 'basic_boolean_field',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_left, 'joystick_left_direction'],
                        [Lang.Blocks.common_right, 'joystick_right_direction'],
                    ],
                    value     : 'joystick_left_direction',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_joystick_direction_left_up,     '17'],
                        [Lang.Blocks.controller_joystick_direction_up,          '18'],
                        [Lang.Blocks.controller_joystick_direction_right_up,    '20'],
                        [Lang.Blocks.controller_joystick_direction_left,        '33'],
                        [Lang.Blocks.controller_joystick_direction_center,      '34'],
                        [Lang.Blocks.controller_joystick_direction_right,       '36'],
                        [Lang.Blocks.controller_joystick_direction_left_down,   '65'],
                        [Lang.Blocks.controller_joystick_direction_down,        '66'],
                        [Lang.Blocks.controller_joystick_direction_right_down,  '68'],
                    ],
                    value     : '34',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
            ],
            events: {},
            def   : {
                params: [null, null],
                type  : 'BigwaveRobotics_drone_8_controller_if_joystick_direction',
            },
            paramsKeyMap: {
                DEVICE   : 0,
                DIRECTION: 1,
            },
            class   : 'boolean_input',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const read   = Entry.hw.portData;
                const device = script.getField('DEVICE');  // paramsKeyMap에 정의된 이름 사용

                if (read[device] == script.getField('DIRECTION'))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.joystick_direction(%1, %2)',
                        blockType : 'param',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_left, 'joystick_left_direction'],
                                    [Lang.Blocks.common_right, 'joystick_right_direction'],
                                ],
                                value     : 'joystick_left_direction',                     // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_joystick_direction_left_up,     '17'],
                                    [Lang.Blocks.controller_joystick_direction_up,          '18'],
                                    [Lang.Blocks.controller_joystick_direction_right_up,    '20'],
                                    [Lang.Blocks.controller_joystick_direction_left,        '33'],
                                    [Lang.Blocks.controller_joystick_direction_center,      '34'],
                                    [Lang.Blocks.controller_joystick_direction_right,       '36'],
                                    [Lang.Blocks.controller_joystick_direction_left_down,   '65'],
                                    [Lang.Blocks.controller_joystick_direction_down,        '66'],
                                    [Lang.Blocks.controller_joystick_direction_right_down,  '68'],
                                ],
                                value     : '34',                                          // 초기 선택항목 지정
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_light_manual_single_off: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRobotics_drone_8_controller_light_manual_single_off',
            },
            paramsKeyMap: {},
            class       : 'controller_light',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.setLightManual(script, 0x20, 0xffff, 0);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Controller.light_off()',
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_light_color_preset: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_color_red,            'red'],
                        [Lang.Blocks.common_light_color_green,          'green'],
                        [Lang.Blocks.common_light_color_blue,           'blue'],
                        [Lang.Blocks.common_light_color_yellow,         'yellow'],
                        [Lang.Blocks.common_light_color_magenta,        'magenta'],
                        [Lang.Blocks.common_light_color_cyan,           'cyan'],
                        [Lang.Blocks.common_light_color_white,          'white'],
                        [Lang.Blocks.common_light_color_sunset,         'sunset'],
                        [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                        [Lang.Blocks.common_light_color_muscat,         'muscat'],
                        [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                        [Lang.Blocks.common_light_color_emerald,        'emerald'],
                        [Lang.Blocks.common_light_color_lavender,       'lavender'],
                    ],
                    value     : 'red',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_brightness_on,    '220'],
                        [Lang.Blocks.common_light_brightness_off,   '0'],
                        [Lang.Blocks.common_light_brightness_b25,   '75'],
                        [Lang.Blocks.common_light_brightness_b50,   '125'],
                        [Lang.Blocks.common_light_brightness_b75,   '200'],
                        [Lang.Blocks.common_light_brightness_b100,  '255'],
                    ],
                    value     : '220',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, null, null],
                type  : 'BigwaveRobotics_drone_8_controller_light_color_preset',
            },
            paramsKeyMap: {
                COLOR     : 0,
                BRIGHTNESS: 1,
            },
            class   : 'controller_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const mode        = 0x22;
                const interval    = parseInt(script.getField('BRIGHTNESS'), 10);
                const colorString = script.getField('COLOR');
                return Entry.BigwaveRoboticsBase.setLightModeColorString(script, 0x20, mode, interval, colorString);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.light_color_preset(%1, %2)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_color_red,            'red'],
                                    [Lang.Blocks.common_light_color_green,          'green'],
                                    [Lang.Blocks.common_light_color_blue,           'blue'],
                                    [Lang.Blocks.common_light_color_yellow,         'yellow'],
                                    [Lang.Blocks.common_light_color_magenta,        'magenta'],
                                    [Lang.Blocks.common_light_color_cyan,           'cyan'],
                                    [Lang.Blocks.common_light_color_white,          'white'],
                                    [Lang.Blocks.common_light_color_sunset,         'sunset'],
                                    [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                                    [Lang.Blocks.common_light_color_muscat,         'muscat'],
                                    [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                                    [Lang.Blocks.common_light_color_emerald,        'emerald'],
                                    [Lang.Blocks.common_light_color_lavender,       'lavender'],
                                ],
                                value     : 'red',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_brightness_on,    '220'],
                                    [Lang.Blocks.common_light_brightness_off,   '0'],
                                    [Lang.Blocks.common_light_brightness_b25,   '75'],
                                    [Lang.Blocks.common_light_brightness_b50,   '125'],
                                    [Lang.Blocks.common_light_brightness_b75,   '200'],
                                    [Lang.Blocks.common_light_brightness_b100,  '255'],
                                ],
                                value     : '220',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_light_manual_single_input: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['0x07'] },
                    { type: 'text', params: ['255'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_light_manual_single_input',
            },
            paramsKeyMap: {
                FLAGS     : 0,
                BRIGHTNESS: 1,
            },
            class   : 'controller_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const flags      = parseInt(script.getStringValue('FLAGS'));
                const brightness = script.getNumberValue('BRIGHTNESS');
                return Entry.BigwaveRoboticsBase.setLightManual(script, 0x20, flags, brightness);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.light_color_manual(%1, %2)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_light_color_input: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                        [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                        [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                        [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                        [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                        [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                        [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                        [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                    ],
                    value     : '2',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['255'] },
                    { type: 'text', params: ['255'] },
                    { type: 'text', params: ['255'] },
                    null,
                    { type: 'text', params: ['250'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_light_color_input',
            },
            paramsKeyMap: {
                RED     : 0,
                GREEN   : 1,
                BLUE    : 2,
                MODE    : 3,
                INTERVAL: 4,
            },
            class   : 'controller_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const mode     = 0x20 + parseInt(script.getField('MODE'), 10);
                const interval = script.getNumberValue('INTERVAL');
                const red      = script.getNumberValue('RED');
                const green    = script.getNumberValue('GREEN');
                const blue     = script.getNumberValue('BLUE');
                return Entry.BigwaveRoboticsBase.setLightModeColor(script, 0x20, mode, interval, red, green, blue);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.light_color_input(%1, %2, %3, %4, %5)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                                    [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                                    [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                                    [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                                    [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                                    [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                                    [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                                    [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                                ],
                                value     : '2',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_light_color_select: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_color_red,            'red'],
                        [Lang.Blocks.common_light_color_green,          'green'],
                        [Lang.Blocks.common_light_color_blue,           'blue'],
                        [Lang.Blocks.common_light_color_yellow,         'yellow'],
                        [Lang.Blocks.common_light_color_magenta,        'magenta'],
                        [Lang.Blocks.common_light_color_cyan,           'cyan'],
                        [Lang.Blocks.common_light_color_white,          'white'],
                        [Lang.Blocks.common_light_color_sunset,         'sunset'],
                        [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                        [Lang.Blocks.common_light_color_muscat,         'muscat'],
                        [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                        [Lang.Blocks.common_light_color_emerald,        'emerald'],
                        [Lang.Blocks.common_light_color_lavender,       'lavender'],
                    ],
                    value     : 'red',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                        [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                        [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                        [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                        [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                        [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                        [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                        [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                    ],
                    value     : '2',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, null, { type: 'text', params: ['250'] }, null],
                type  : 'BigwaveRobotics_drone_8_controller_light_color_select',
            },
            paramsKeyMap: {
                COLOR   : 0,
                MODE    : 1,
                INTERVAL: 2,
            },
            class   : 'controller_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const mode        = 0x20 + parseInt(script.getField('MODE'), 10);
                const interval    = script.getNumberValue('INTERVAL');
                const colorString = script.getField('COLOR');
                return Entry.BigwaveRoboticsBase.setLightModeColorString(script, 0x20, mode, interval, colorString);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.light_color_select(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_color_red,            'red'],
                                    [Lang.Blocks.common_light_color_green,          'green'],
                                    [Lang.Blocks.common_light_color_blue,           'blue'],
                                    [Lang.Blocks.common_light_color_yellow,         'yellow'],
                                    [Lang.Blocks.common_light_color_magenta,        'magenta'],
                                    [Lang.Blocks.common_light_color_cyan,           'cyan'],
                                    [Lang.Blocks.common_light_color_white,          'white'],
                                    [Lang.Blocks.common_light_color_sunset,         'sunset'],
                                    [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                                    [Lang.Blocks.common_light_color_muscat,         'muscat'],
                                    [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                                    [Lang.Blocks.common_light_color_emerald,        'emerald'],
                                    [Lang.Blocks.common_light_color_lavender,       'lavender'],
                                ],
                                value     : 'red',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                                    [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                                    [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                                    [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                                    [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                                    [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                                    [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                                    [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                                ],
                                value     : '2',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_light_manual_single_off: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRoboticsFome_light_manual_single_off',
            },
            paramsKeyMap: {},
            class       : 'drone_light',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.setLightManual(script, 0x10, 0xff, 0);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Drone.light_off()',
                    },
                ],
            },
        },

        BigwaveRoboticsFome_light_color_preset: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_color_red,            'red'],
                        [Lang.Blocks.common_light_color_green,          'green'],
                        [Lang.Blocks.common_light_color_blue,           'blue'],
                        [Lang.Blocks.common_light_color_yellow,         'yellow'],
                        [Lang.Blocks.common_light_color_magenta,        'magenta'],
                        [Lang.Blocks.common_light_color_cyan,           'cyan'],
                        [Lang.Blocks.common_light_color_white,          'white'],
                        [Lang.Blocks.common_light_color_sunset,         'sunset'],
                        [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                        [Lang.Blocks.common_light_color_muscat,         'muscat'],
                        [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                        [Lang.Blocks.common_light_color_emerald,        'emerald'],
                        [Lang.Blocks.common_light_color_lavender,       'lavender'],
                    ],
                    value     : 'red',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_brightness_on,    '220'],
                        [Lang.Blocks.common_light_brightness_off,   '0'],
                        [Lang.Blocks.common_light_brightness_b25,   '75'],
                        [Lang.Blocks.common_light_brightness_b50,   '125'],
                        [Lang.Blocks.common_light_brightness_b75,   '200'],
                        [Lang.Blocks.common_light_brightness_b100,  '255'],
                    ],
                    value     : '220',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, null, null],
                type  : 'BigwaveRoboticsFome_light_color_preset',
            },
            paramsKeyMap: {
                COLOR     : 0,
                BRIGHTNESS: 1,
            },
            class   : 'drone_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const mode        = 0x22;
                const interval    = parseInt(script.getField('BRIGHTNESS'), 10);
                const colorString = script.getField('COLOR');
                return Entry.BigwaveRoboticsBase.setLightModeColorString(script, 0x10, mode, interval, colorString);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.light_color_preset(%1, %2)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_color_red,            'red'],
                                    [Lang.Blocks.common_light_color_green,          'green'],
                                    [Lang.Blocks.common_light_color_blue,           'blue'],
                                    [Lang.Blocks.common_light_color_yellow,         'yellow'],
                                    [Lang.Blocks.common_light_color_magenta,        'magenta'],
                                    [Lang.Blocks.common_light_color_cyan,           'cyan'],
                                    [Lang.Blocks.common_light_color_white,          'white'],
                                    [Lang.Blocks.common_light_color_sunset,         'sunset'],
                                    [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                                    [Lang.Blocks.common_light_color_muscat,         'muscat'],
                                    [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                                    [Lang.Blocks.common_light_color_emerald,        'emerald'],
                                    [Lang.Blocks.common_light_color_lavender,       'lavender'],
                                ],
                                value     : 'red',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_brightness_on,    '220'],
                                    [Lang.Blocks.common_light_brightness_off,   '0'],
                                    [Lang.Blocks.common_light_brightness_b25,   '75'],
                                    [Lang.Blocks.common_light_brightness_b50,   '125'],
                                    [Lang.Blocks.common_light_brightness_b75,   '200'],
                                    [Lang.Blocks.common_light_brightness_b100,  '255'],
                                ],
                                value     : '200',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_light_manual_single_input: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['0x3F'] },
                    { type: 'text', params: ['255'] },
                    null,
                ],
                type: 'BigwaveRoboticsFome_light_manual_single_input',
            },
            paramsKeyMap: {
                FLAGS     : 0,
                BRIGHTNESS: 1,
            },
            class   : 'drone_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const flags      = parseInt(script.getStringValue('FLAGS'));
                const brightness = script.getNumberValue('BRIGHTNESS');
                return Entry.BigwaveRoboticsBase.setLightManual(script, 0x10, flags, brightness);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.light_color_manual(%1, %2)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_light_color_input: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                        [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                        [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                        [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                        [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                        [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                        [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                        [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                    ],
                    value     : '2',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['255'] },
                    { type: 'text', params: ['255'] },
                    { type: 'text', params: ['255'] },
                    null,
                    { type: 'text', params: ['250'] },
                    null,
                ],
                type: 'BigwaveRoboticsFome_light_color_input',
            },
            paramsKeyMap: {
                RED     : 0,
                GREEN   : 1,
                BLUE    : 2,
                MODE    : 3,
                INTERVAL: 4,
            },
            class   : 'drone_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const mode     = 0x20 + parseInt(script.getField('MODE'), 10);
                const red      = script.getNumberValue('RED');
                const green    = script.getNumberValue('GREEN');
                const blue     = script.getNumberValue('BLUE');
                const interval = script.getNumberValue('INTERVAL');
                return Entry.BigwaveRoboticsBase.setLightModeColor(script, 0x10, mode, interval, red, green, blue);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.light_color_input(%1, %2, %3, %4, %5)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                                    [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                                    [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                                    [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                                    [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                                    [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                                    [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                                    [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                                ],
                                value     : '2',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_light_color_select: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_color_red,            'red'],
                        [Lang.Blocks.common_light_color_green,          'green'],
                        [Lang.Blocks.common_light_color_blue,           'blue'],
                        [Lang.Blocks.common_light_color_yellow,         'yellow'],
                        [Lang.Blocks.common_light_color_magenta,        'magenta'],
                        [Lang.Blocks.common_light_color_cyan,           'cyan'],
                        [Lang.Blocks.common_light_color_white,          'white'],
                        [Lang.Blocks.common_light_color_sunset,         'sunset'],
                        [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                        [Lang.Blocks.common_light_color_muscat,         'muscat'],
                        [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                        [Lang.Blocks.common_light_color_emerald,        'emerald'],
                        [Lang.Blocks.common_light_color_lavender,       'lavender'],
                    ],
                    value     : 'red',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                        [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                        [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                        [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                        [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                        [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                        [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                        [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                    ],
                    value     : '2',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, null, { type: 'text', params: ['250'] }, null],
                type  : 'BigwaveRoboticsFome_light_color_select',
            },
            paramsKeyMap: {
                COLOR   : 0,
                MODE    : 1,
                INTERVAL: 2,
            },
            class   : 'drone_light',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const mode        = 0x20 + parseInt(script.getField('MODE'), 10);
                const interval    = script.getNumberValue('INTERVAL');
                const colorString = script.getField('COLOR');
                return Entry.BigwaveRoboticsBase.setLightModeColorString(script, 0x10, mode, interval, colorString);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.light_color_select(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_color_red,            'red'],
                                    [Lang.Blocks.common_light_color_green,          'green'],
                                    [Lang.Blocks.common_light_color_blue,           'blue'],
                                    [Lang.Blocks.common_light_color_yellow,         'yellow'],
                                    [Lang.Blocks.common_light_color_magenta,        'magenta'],
                                    [Lang.Blocks.common_light_color_cyan,           'cyan'],
                                    [Lang.Blocks.common_light_color_white,          'white'],
                                    [Lang.Blocks.common_light_color_sunset,         'sunset'],
                                    [Lang.Blocks.common_light_color_cottoncandy,    'cottonCandy'],
                                    [Lang.Blocks.common_light_color_muscat,         'muscat'],
                                    [Lang.Blocks.common_light_color_strawberrymilk, 'strawberryMilk'],
                                    [Lang.Blocks.common_light_color_emerald,        'emerald'],
                                    [Lang.Blocks.common_light_color_lavender,       'lavender'],
                                ],
                                value     : 'red',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_light_mode_hold,            '2'],   // BodyHold            = 0x22
                                    [Lang.Blocks.common_light_mode_flicker,         '3'],   // BodyFlicker         = 0x23
                                    [Lang.Blocks.common_light_mode_flicker_double,  '4'],   // BodyFlickerDouble   = 0x24
                                    [Lang.Blocks.common_light_mode_dimming,         '5'],   // BodyDimming         = 0x25
                                    [Lang.Blocks.common_light_mode_sunrise,         '6'],   // BodyS8unrise        = 0x26
                                    [Lang.Blocks.common_light_mode_sunset,          '7'],   // BodySunset          = 0x27
                                    [Lang.Blocks.common_light_mode_rainbow,         '8'],   // BodyRainbow         = 0x28
                                    [Lang.Blocks.common_light_mode_rainbow2,        '9'],   // BodyRainbow2        = 0x29
                                ],
                                value     : '2',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_clear_all: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, null],
                type  : 'BigwaveRobotics_drone_8_controller_display_clear_all',
            },
            paramsKeyMap: {
                PIXEL: 0,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const pixel = parseInt(script.getField('PIXEL'), 10);
                return Entry.BigwaveRoboticsBase.setDisplayClearAll(script, 0x20, pixel);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_clear_all(%1)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_clear: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['64'] },
                    { type: 'text', params: ['32'] },
                    { type: 'text', params: ['32'] },
                    { type: 'text', params: ['16'] },
                    null,
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_display_clear',
            },
            paramsKeyMap: {
                X     : 0,
                Y     : 1,
                WIDTH : 2,
                HEIGHT: 3,
                PIXEL : 4,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const x      = script.getNumberValue('X');
                const y      = script.getNumberValue('Y');
                const width  = script.getNumberValue('WIDTH');
                const height = script.getNumberValue('HEIGHT');
                const pixel  = parseInt(script.getField('PIXEL'), 10);
                return Entry.BigwaveRoboticsBase.setDisplayClear(script, 0x20, pixel, x, y, width, height);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_clear(%1, %2, %3, %4, %5)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_draw_point: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['64'] },
                    { type: 'text', params: ['32'] },
                    null,
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_display_draw_point',
            },
            paramsKeyMap: {
                X    : 0,
                Y    : 1,
                PIXEL: 2,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const x     = script.getNumberValue('X');
                const y     = script.getNumberValue('Y');
                const pixel = parseInt(script.getField('PIXEL'), 10);
                return Entry.BigwaveRoboticsBase.setDisplayDrawPoint(script, 0x20, x, y, pixel);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_draw_point(%1, %2, %3)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_draw_line: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_line_solid, '0'],
                        [Lang.Blocks.controller_display_line_dotted, '1'],
                        [Lang.Blocks.controller_display_line_dashed, '2'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['32'] },
                    { type: 'text', params: ['16'] },
                    { type: 'text', params: ['96'] },
                    { type: 'text', params: ['48'] },
                    null,
                    null,
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_display_draw_line',
            },
            paramsKeyMap: {
                X1   : 0,
                Y1   : 1,
                X2   : 2,
                Y2   : 3,
                PIXEL: 4,
                LINE : 5,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const x1    = script.getNumberValue('X1');
                const y1    = script.getNumberValue('Y1');
                const x2    = script.getNumberValue('X2');
                const y2    = script.getNumberValue('Y2');
                const pixel = parseInt(script.getField('PIXEL'), 10);
                const line  = parseInt(script.getField('LINE'), 10);
                return Entry.BigwaveRoboticsBase.setDisplayDrawLine(script, 0x20, x1, y1, x2, y2, pixel, line);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_draw_line(%1, %2, %3, %4, %5, %6)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_line_solid, '0'],
                                    [Lang.Blocks.controller_display_line_dotted, '1'],
                                    [Lang.Blocks.controller_display_line_dashed, '2'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_draw_rect: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_flagfill_off, '0'],
                        [Lang.Blocks.controller_display_flagfill_on, '1'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_line_solid, '0'],
                        [Lang.Blocks.controller_display_line_dotted, '1'],
                        [Lang.Blocks.controller_display_line_dashed, '2'],
                    ],
                    value     : '2',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['64'] },
                    { type: 'text', params: ['32'] },
                    { type: 'text', params: ['32'] },
                    { type: 'text', params: ['16'] },
                    null,
                    null,
                    null,
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_display_draw_rect',
            },
            paramsKeyMap: {
                X       : 0,
                Y       : 1,
                WIDTH   : 2,
                HEIGHT  : 3,
                PIXEL   : 4,
                FLAGFILL: 5,
                LINE    : 6,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const x        = script.getNumberValue('X');
                const y        = script.getNumberValue('Y');
                const width    = script.getNumberValue('WIDTH');
                const height   = script.getNumberValue('HEIGHT');
                const pixel    = parseInt(script.getField('PIXEL'), 10);
                const flagFill = parseInt(script.getField('FLAGFILL'), 10);
                const line     = parseInt(script.getField('LINE'), 10);
                return Entry.BigwaveRoboticsBase.setDisplayDrawRect(script, 0x20, x, y, width, height, pixel, flagFill, line);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_draw_rect(%1, %2, %3, %4, %5, %6)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_flagfill_off, '0'],
                                    [Lang.Blocks.controller_display_flagfill_on, '1'],
                                ],
                                value     : '1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_line_solid, '0'],
                                    [Lang.Blocks.controller_display_line_dotted, '1'],
                                    [Lang.Blocks.controller_display_line_dashed, '2'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_draw_circle: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_flagfill_off, '0'],
                        [Lang.Blocks.controller_display_flagfill_on, '1'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['64'] },
                    { type: 'text', params: ['32'] },
                    { type: 'text', params: ['24'] },
                    null,
                    null,
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_display_draw_circle',
            },
            paramsKeyMap: {
                X       : 0,
                Y       : 1,
                RADIUS  : 2,
                PIXEL   : 3,
                FLAGFILL: 4,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const x        = script.getNumberValue('X');
                const y        = script.getNumberValue('Y');
                const radius   = script.getNumberValue('RADIUS');
                const pixel    = parseInt(script.getField('PIXEL'), 10);
                const flagFill = parseInt(script.getField('FLAGFILL'), 10);
                return Entry.BigwaveRoboticsBase.setDisplayDrawCircle(script, 0x20, x, y, radius, pixel, flagFill);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_draw_circle(%1, %2, %3, %4, %5)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_flagfill_off, '0'],
                                    [Lang.Blocks.controller_display_flagfill_on, '1'],
                                ],
                                value     : '1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_draw_string: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_font_5x8, '0'],
                        [Lang.Blocks.controller_display_font_10x16, '1'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['39'] },
                    { type: 'text', params: ['16'] },
                    null,
                    null,
                    { type: 'text', params: ['HELLO'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_display_draw_string',
            },
            paramsKeyMap: {
                X     : 0,
                Y     : 1,
                FONT  : 2,
                PIXEL : 3,
                STRING: 4,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const x      = script.getNumberValue('X');
                const y      = script.getNumberValue('Y');
                const font   = parseInt(script.getField('FONT'), 10);
                const pixel  = parseInt(script.getField('PIXEL'), 10);
                const string = script.getStringValue('STRING');
                return Entry.BigwaveRoboticsBase.setDisplayDrawString(script, 0x20, x, y, font, pixel, string);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_draw_string(%1, %2, %3, %4, %5)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_font_5x8, '0'],
                                    [Lang.Blocks.controller_display_font_10x16, '1'],
                                ],
                                value     : '1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_display_draw_string_align: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_align_left, '0'],
                        [Lang.Blocks.controller_display_align_center, '1'],
                        [Lang.Blocks.controller_display_align_right, '2'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_font_5x8, '0'],
                        [Lang.Blocks.controller_display_font_10x16, '1'],
                    ],
                    value     : '1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_display_pixel_black, '0'],
                        [Lang.Blocks.controller_display_pixel_white, '1'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['0'] },
                    { type: 'text', params: ['128'] },
                    { type: 'text', params: ['42'] },
                    null,
                    null,
                    null,
                    { type: 'text', params: ['DRONE'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_display_draw_string_align',
            },
            paramsKeyMap: {
                XSTART: 0,
                XEND  : 1,
                Y     : 2,
                ALIGN : 3,
                FONT  : 4,
                PIXEL : 5,
                STRING: 6,
            },
            class   : 'controller_display',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const xStart = script.getNumberValue('XSTART');
                const xEnd   = script.getNumberValue('XEND');
                const y      = script.getNumberValue('Y');
                const align  = parseInt(script.getField('ALIGN'), 10);
                const font   = parseInt(script.getField('FONT'), 10);
                const pixel  = parseInt(script.getField('PIXEL'), 10);
                const string = script.getStringValue('STRING');
                return Entry.BigwaveRoboticsBase.setDisplayDrawStringAlign(script, 0x20, xStart, xEnd, y, align, font, pixel, string);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.display_draw_string_align(%1, %2, %3, %4, %5, %6, %7)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_align_left, '0'],
                                    [Lang.Blocks.controller_display_align_center, '1'],
                                    [Lang.Blocks.controller_display_align_right, '2'],
                                ],
                                value     : '1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_font_5x8, '0'],
                                    [Lang.Blocks.controller_display_font_10x16, '1'],
                                ],
                                value     : '1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_display_pixel_black, '0'],
                                    [Lang.Blocks.controller_display_pixel_white, '1'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_buzzer_off: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_drone, '0x10'],
                        [Lang.Blocks.common_controller, '0x20'],
                    ],
                    value     : '0x20',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }
            ],
            events: {},
            def   : {
                params: [null, null],
                type  : 'BigwaveRobotics_drone_8_controller_buzzer_off',
            },
            paramsKeyMap: {
                TARGET: 0
            },
            class   : 'buzzer',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const target = parseInt(script.getStringValue('TARGET'));
                return Entry.BigwaveRoboticsBase.setBuzzerStop(script, target);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.buzzer_off(%1)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_drone, '0x10'],
                                    [Lang.Blocks.common_controller, '0x20'],
                                ],
                                value     : '0x20',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_buzzer_scale: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_drone, '0x10'],
                        [Lang.Blocks.common_controller, '0x20'],
                    ],
                    value     : '0x20',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        ['1', '0'],
                        ['2', '1'],
                        ['3', '2'],
                        ['4', '3'],
                        ['5', '4'],
                        ['6', '5'],
                        ['7', '6'],
                        ['8', '7'],
                    ],
                    value     : '4',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_buzzer_mute, '-1'],
                        [Lang.Blocks.controller_buzzer_c,    '0'],
                        [Lang.Blocks.controller_buzzer_cs,   '1'],
                        [Lang.Blocks.controller_buzzer_d,    '2'],
                        [Lang.Blocks.controller_buzzer_ds,   '3'],
                        [Lang.Blocks.controller_buzzer_e,    '4'],
                        [Lang.Blocks.controller_buzzer_f,    '5'],
                        [Lang.Blocks.controller_buzzer_fs,   '6'],
                        [Lang.Blocks.controller_buzzer_g,    '7'],
                        [Lang.Blocks.controller_buzzer_gs,   '8'],
                        [Lang.Blocks.controller_buzzer_a,    '9'],
                        [Lang.Blocks.controller_buzzer_as,   '10'],
                        [Lang.Blocks.controller_buzzer_b,    '11'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, null, null, null],
                type  : 'BigwaveRobotics_drone_8_controller_buzzer_scale',
            },
            paramsKeyMap: {
                TARGET: 0,
                OCTAVE: 1,
                SCALE : 2,
            },
            class   : 'buzzer',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const target = parseInt(script.getStringValue('TARGET'));
                const octave = parseInt(script.getField('OCTAVE'), 10);
                const scale  = parseInt(script.getField('SCALE'), 10);

                if (scale == -1) {
                    return Entry.BigwaveRoboticsBase.setBuzzerMute(script, target, 60000, false, true);
                } else {
                    return Entry.BigwaveRoboticsBase.setBuzzerScale(script, target, octave, scale, 60000, false, true);
                }
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.buzzer_scale(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_drone, '0x10'],
                                    [Lang.Blocks.common_controller, '0x20'],
                                ],
                                value     : '0x20',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    ['1', '0'],
                                    ['2', '1'],
                                    ['3', '2'],
                                    ['4', '3'],
                                    ['5', '4'],
                                    ['6', '5'],
                                    ['7', '6'],
                                    ['8', '7'],
                                ],
                                value     : '4',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_buzzer_mute, '-1'],
                                    [Lang.Blocks.controller_buzzer_c,    '0'],
                                    [Lang.Blocks.controller_buzzer_cs,   '1'],
                                    [Lang.Blocks.controller_buzzer_d,    '2'],
                                    [Lang.Blocks.controller_buzzer_ds,   '3'],
                                    [Lang.Blocks.controller_buzzer_e,    '4'],
                                    [Lang.Blocks.controller_buzzer_f,    '5'],
                                    [Lang.Blocks.controller_buzzer_fs,   '6'],
                                    [Lang.Blocks.controller_buzzer_g,    '7'],
                                    [Lang.Blocks.controller_buzzer_gs,   '8'],
                                    [Lang.Blocks.controller_buzzer_a,    '9'],
                                    [Lang.Blocks.controller_buzzer_as,   '10'],
                                    [Lang.Blocks.controller_buzzer_b,    '11'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_buzzer_scale_delay: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_drone, '0x10'],
                        [Lang.Blocks.common_controller, '0x20'],
                    ],
                    value     : '0x20',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        ['1', '0'],
                        ['2', '1'],
                        ['3', '2'],
                        ['4', '3'],
                        ['5', '4'],
                        ['6', '5'],
                        ['7', '6'],
                        ['8', '7'],
                    ],
                    value     : '4',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_buzzer_mute, '-1'],
                        [Lang.Blocks.controller_buzzer_c,    '0'],
                        [Lang.Blocks.controller_buzzer_cs,   '1'],
                        [Lang.Blocks.controller_buzzer_d,    '2'],
                        [Lang.Blocks.controller_buzzer_ds,   '3'],
                        [Lang.Blocks.controller_buzzer_e,    '4'],
                        [Lang.Blocks.controller_buzzer_f,    '5'],
                        [Lang.Blocks.controller_buzzer_fs,   '6'],
                        [Lang.Blocks.controller_buzzer_g,    '7'],
                        [Lang.Blocks.controller_buzzer_gs,   '8'],
                        [Lang.Blocks.controller_buzzer_a,    '9'],
                        [Lang.Blocks.controller_buzzer_as,   '10'],
                        [Lang.Blocks.controller_buzzer_b,    '11'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    null,
                    null,
                    null,
                    { type: 'text', params: ['1'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_buzzer_scale_delay',
            },
            paramsKeyMap: {
                TARGET: 0,
                OCTAVE: 1,
                SCALE : 2,
                TIME  : 3,
            },
            class   : 'buzzer',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const target = parseInt(script.getStringValue('TARGET'));
                const octave = parseInt(script.getField('OCTAVE'), 10);
                const scale  = parseInt(script.getField('SCALE'), 10);
                const time   = script.getNumberValue('TIME') * 1000;

                if (scale == -1) {
                    return Entry.BigwaveRoboticsBase.setBuzzerMute(script, target, time, true, true);
                } else {
                    return Entry.BigwaveRoboticsBase.setBuzzerScale(script, target, octave, scale, time, true, true);
                }
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.buzzer_scale_delay(%1, %2, %3, %4)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_drone, '0x10'],
                                    [Lang.Blocks.common_controller, '0x20'],
                                ],
                                value     : '0x20',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    ['1', '0'],
                                    ['2', '1'],
                                    ['3', '2'],
                                    ['4', '3'],
                                    ['5', '4'],
                                    ['6', '5'],
                                    ['7', '6'],
                                    ['8', '7'],
                                ],
                                value     : '4',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_buzzer_mute, '-1'],
                                    [Lang.Blocks.controller_buzzer_c,    '0'],
                                    [Lang.Blocks.controller_buzzer_cs,   '1'],
                                    [Lang.Blocks.controller_buzzer_d,    '2'],
                                    [Lang.Blocks.controller_buzzer_ds,   '3'],
                                    [Lang.Blocks.controller_buzzer_e,    '4'],
                                    [Lang.Blocks.controller_buzzer_f,    '5'],
                                    [Lang.Blocks.controller_buzzer_fs,   '6'],
                                    [Lang.Blocks.controller_buzzer_g,    '7'],
                                    [Lang.Blocks.controller_buzzer_gs,   '8'],
                                    [Lang.Blocks.controller_buzzer_a,    '9'],
                                    [Lang.Blocks.controller_buzzer_as,   '10'],
                                    [Lang.Blocks.controller_buzzer_b,    '11'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_buzzer_scale_reserve: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_drone, '0x10'],
                        [Lang.Blocks.common_controller, '0x20'],
                    ],
                    value     : '0x20',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        ['1', '0'],
                        ['2', '1'],
                        ['3', '2'],
                        ['4', '3'],
                        ['5', '4'],
                        ['6', '5'],
                        ['7', '6'],
                        ['8', '7'],
                    ],
                    value     : '4',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.controller_buzzer_mute, '-1'],
                        [Lang.Blocks.controller_buzzer_c,    '0'],
                        [Lang.Blocks.controller_buzzer_cs,   '1'],
                        [Lang.Blocks.controller_buzzer_d,    '2'],
                        [Lang.Blocks.controller_buzzer_ds,   '3'],
                        [Lang.Blocks.controller_buzzer_e,    '4'],
                        [Lang.Blocks.controller_buzzer_f,    '5'],
                        [Lang.Blocks.controller_buzzer_fs,   '6'],
                        [Lang.Blocks.controller_buzzer_g,    '7'],
                        [Lang.Blocks.controller_buzzer_gs,   '8'],
                        [Lang.Blocks.controller_buzzer_a,    '9'],
                        [Lang.Blocks.controller_buzzer_as,   '10'],
                        [Lang.Blocks.controller_buzzer_b,    '11'],
                    ],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    null,
                    null,
                    null,
                    { type: 'text', params: ['1'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_buzzer_scale_reserve',
            },
            paramsKeyMap: {
                TARGET: 0,
                OCTAVE: 1,
                SCALE : 2,
                TIME  : 3,
            },
            class   : 'buzzer',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const target = parseInt(script.getStringValue('TARGET'));
                const octave = parseInt(script.getField('OCTAVE'), 10);
                const scale  = parseInt(script.getField('SCALE'), 10);
                const time   = script.getNumberValue('TIME') * 1000;

                if (scale == -1) {
                    return Entry.BigwaveRoboticsBase.setBuzzerMute(script, target, time, false, false);
                } else {
                    return Entry.BigwaveRoboticsBase.setBuzzerScale(script, target, octave, scale, time, false, false);
                }
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.buzzer_scale_reserve(%1, %2, %3, %4)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_drone, '0x10'],
                                    [Lang.Blocks.common_controller, '0x20'],
                                ],
                                value     : '0x20',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    ['1', '0'],
                                    ['2', '1'],
                                    ['3', '2'],
                                    ['4', '3'],
                                    ['5', '4'],
                                    ['6', '5'],
                                    ['7', '6'],
                                    ['8', '7'],
                                ],
                                value     : '4',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.controller_buzzer_mute, '-1'],
                                    [Lang.Blocks.controller_buzzer_c,    '0'],
                                    [Lang.Blocks.controller_buzzer_cs,   '1'],
                                    [Lang.Blocks.controller_buzzer_d,    '2'],
                                    [Lang.Blocks.controller_buzzer_ds,   '3'],
                                    [Lang.Blocks.controller_buzzer_e,    '4'],
                                    [Lang.Blocks.controller_buzzer_f,    '5'],
                                    [Lang.Blocks.controller_buzzer_fs,   '6'],
                                    [Lang.Blocks.controller_buzzer_g,    '7'],
                                    [Lang.Blocks.controller_buzzer_gs,   '8'],
                                    [Lang.Blocks.controller_buzzer_a,    '9'],
                                    [Lang.Blocks.controller_buzzer_as,   '10'],
                                    [Lang.Blocks.controller_buzzer_b,    '11'],
                                ],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_buzzer_hz: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_drone, '0x10'],
                        [Lang.Blocks.common_controller, '0x20'],
                    ],
                    value     : '0x20',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, { type: 'text', params: ['1000'] }, null],
                type  : 'BigwaveRobotics_drone_8_controller_buzzer_hz',
            },
            paramsKeyMap: {
                TARGET: 0,
                HZ    : 1,
            },
            class   : 'buzzer',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const target = parseInt(script.getStringValue('TARGET'));
                const hz     = script.getNumberValue('HZ');
                return Entry.BigwaveRoboticsBase.setBuzzerHz(script, target, hz, 60000, false, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.buzzer_hz(%1, %2)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_drone, '0x10'],
                                    [Lang.Blocks.common_controller, '0x20'],
                                ],
                                value     : '0x20',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_buzzer_hz_delay: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_drone, '0x10'],
                        [Lang.Blocks.common_controller, '0x20'],
                    ],
                    value     : '0x20',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, { type: 'text', params: ['1000'] }, { type: 'text', params: ['1'] }, null],
                type  : 'BigwaveRobotics_drone_8_controller_buzzer_hz_delay',
            },
            paramsKeyMap: {
                TARGET: 0,
                HZ    : 1,
                TIME  : 2,
            },
            class   : 'buzzer',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const target = parseInt(script.getStringValue('TARGET'));
                const hz     = script.getNumberValue('HZ');
                const time   = script.getNumberValue('TIME') * 1000;
                return Entry.BigwaveRoboticsBase.setBuzzerHz(script, target, hz, time, true, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.buzzer_hz_delay(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_drone, '0x10'],
                                    [Lang.Blocks.common_controller, '0x20'],
                                ],
                                value     : '0x20',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_buzzer_hz_reserve: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.common_drone, '0x10'],
                        [Lang.Blocks.common_controller, '0x20'],
                    ],
                    value     : '0x20',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    null,
                    { type: 'text', params: ['1000'] },
                    { type: 'text', params: ['1'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_buzzer_hz_reserve',
            },
            paramsKeyMap: {
                TARGET: 0,
                HZ    : 1,
                TIME  : 2,
            },
            class   : 'buzzer',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const target = parseInt(script.getStringValue('TARGET'));
                const hz     = script.getNumberValue('HZ');
                const time   = script.getNumberValue('TIME') * 1000;
                return Entry.BigwaveRoboticsBase.setBuzzerHz(script, target, hz, time, false, false);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.buzzer_hz_reserve(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.common_drone, '0x10'],
                                    [Lang.Blocks.common_controller, '0x20'],
                                ],
                                value     : '0x20',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_vibrator_off: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRobotics_drone_8_controller_vibrator_off',
            },
            paramsKeyMap: {},
            class       : 'vibrator',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.setVibratorStop(script, 0x20);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Controller.vibrator_off()',
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_vibrator_on_delay: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [{ type: 'text', params: ['1'] }, null],
                type  : 'BigwaveRobotics_drone_8_controller_vibrator_on_delay',
            },
            paramsKeyMap: {
                TIMEON: 0,
            },
            class   : 'vibrator',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const timeOn = script.getNumberValue('TIMEON') * 1000;
                return Entry.BigwaveRoboticsBase.setVibrator(script, 0x20, timeOn, 0, timeOn, true, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.vibrator_on_delay(%1)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_vibrator_on_reserve: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [{ type: 'text', params: ['1'] }, null],
                type  : 'BigwaveRobotics_drone_8_controller_vibrator_on_reserve',
            },
            paramsKeyMap: {
                TIMEON: 0,
            },
            class   : 'vibrator',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const timeOn = script.getNumberValue('TIMEON') * 1000;
                return Entry.BigwaveRoboticsBase.setVibrator(script, 0x20, timeOn, 0, timeOn, false, false);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.vibrator_on_reserve(%1)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_vibrator_delay: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['0.3'] },
                    { type: 'text', params: ['0.3'] },
                    { type: 'text', params: ['1'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_vibrator_delay',
            },
            paramsKeyMap: {
                TIMEON : 0,
                TIMEOFF: 1,
                TIMERUN: 2,
            },
            class   : 'vibrator',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const timeOn  = script.getNumberValue('TIMEON') * 1000;
                const timeOff = script.getNumberValue('TIMEOFF') * 1000;
                const timeRun = script.getNumberValue('TIMERUN') * 1000;
                return Entry.BigwaveRoboticsBase.setVibrator(script, 0x20, timeOn, timeOff, timeRun, true, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.vibrator_delay(%1, %2, %3)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRobotics_drone_8_controller_vibrator_reserve: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'text', params: ['0.3'] },
                    { type: 'text', params: ['0.3'] },
                    { type: 'text', params: ['1'] },
                    null,
                ],
                type: 'BigwaveRobotics_drone_8_controller_vibrator_reserve',
            },
            paramsKeyMap: {
                TIMEON : 0,
                TIMEOFF: 1,
                TIMERUN: 2,
            },
            class   : 'vibrator',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const timeOn  = script.getNumberValue('TIMEON') * 1000;
                const timeOff = script.getNumberValue('TIMEOFF') * 1000;
                const timeRun = script.getNumberValue('TIMERUN') * 1000;
                return Entry.BigwaveRoboticsBase.setVibrator(script, 0x20, timeOn, timeOff, timeRun, false, false);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Controller.vibrator_reserve(%1, %2, %3)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_motor_stop: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRoboticsFome_motor_stop',
            },
            paramsKeyMap: {},
            class       : 'motor',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.sendStop(script, 0x10);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Drone.motor_stop()',
                    },
                ],
            },
        },

        BigwaveRoboticsFome_motorsingle: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type      : 'Dropdown',
                    options   : [['1(FR)', '0'], ['2(RR)', '1'], ['3(RL)', '2'], ['4(FL)', '3']],
                    value     : '0',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, { type: 'text', params: ['120'] }, null],
                type  : 'BigwaveRoboticsFome_motorsingle',
            },
            paramsKeyMap: {
                MOTORINDEX: 0,
                MOTORSPEED: 1,
            },
            class   : 'motor',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const motorIndex = parseInt(script.getField('MOTORINDEX'), 10);
                const motorSpeed = script.getNumberValue('MOTORSPEED');

                return Entry.BigwaveRoboticsBase.setMotorSingleV(script, 0x10, motorIndex, motorSpeed);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.motor_single(%1, %2)',
                        textParams: [
                            {
                                type      : 'Dropdown',
                                options   : [['1(FR)', '0'], ['2(RR)', '1'], ['3(RL)', '2'], ['4(FL)', '3']],
                                value     : '0',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_motorsingle_input: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [{ type: 'text', params: ['1'] }, { type: 'text', params: ['120'] }, null],
                type  : 'BigwaveRoboticsFome_motorsingle_input',
            },
            paramsKeyMap: {
                MOTORINDEX: 0,
                MOTORSPEED: 1,
            },
            class   : 'motor',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const motorIndex = script.getNumberValue('MOTORINDEX') - 1;
                const motorSpeed = script.getNumberValue('MOTORSPEED');

                return Entry.BigwaveRoboticsBase.setMotorSingleV(script, 0x10, motorIndex, motorSpeed);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.motor_single_input(%1, %2)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_drone_takeoff: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRoboticsFome_control_drone_takeoff',
            },
            paramsKeyMap: {},
            class       : 'control_flight',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.setEventFlight(script, 0x10, 0x11, 5000); // 0x11 : FlightEvent::TakeOff
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Drone.takeoff()',
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_drone_landing: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRoboticsFome_control_drone_landing',
            },
            paramsKeyMap: {},
            class       : 'control_flight',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.setEventFlight(script, 0x10, 0x12, 5000); // 0x12 : FlightEvent::Landing
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Drone.landing()',
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_drone_stop: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRoboticsFome_control_drone_stop',
            },
            paramsKeyMap: {},
            class       : 'control_flight',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.sendStop(script, 0x10);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Drone.stop()',
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_headless: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_headless_headless, '1'],
                        [Lang.Blocks.drone_headless_normal,   '2'],
                    ],
                    value     : '2',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, null],
                type  : 'BigwaveRoboticsFome_control_headless',
            },
            paramsKeyMap: {
                HEADLESS: 0,
            },
            class   : 'control_flight',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const headless = script.getField('HEADLESS');
                return Entry.BigwaveRoboticsBase.sendCommand(script, 0x10, 0x03, headless);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.headless(%1)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_headless_headless, '1'],
                                    [Lang.Blocks.drone_headless_normal,   '2'],
                                ],
                                value     : '2',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_drone_reset_heading: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [{ type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 }],
            events    : {},
            def       : {
                params: [null],
                type  : 'BigwaveRoboticsFome_control_drone_reset_heading',
            },
            paramsKeyMap: {},
            class       : 'control_flight',
            isNotFor    : ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                return Entry.BigwaveRoboticsBase.sendCommand(script, 0x10, 0x07, 0xA0); // 0x22 : CommandType::FlightEvent  // 0xA0 : FlightEvent::ResetHeading
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax: 'Drone.reset_heading()',
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_quad_one: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_roll,     'control_quad8_roll'],
                        [Lang.Blocks.drone_control_quad_pitch,    'control_quad8_pitch'],
                        [Lang.Blocks.drone_control_quad_yaw,      'control_quad8_yaw'],
                        [Lang.Blocks.drone_control_quad_throttle, 'control_quad8_throttle'],
                    ],
                    value     : 'control_quad8_pitch',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, { type: 'number', params: ['0'] }, null],
                type  : 'BigwaveRoboticsFome_control_quad_one',
            },
            paramsKeyMap: {
                CONTROLTARGET: 0,
                VALUE        : 1,
            },
            class   : 'control_quad',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const controlTarget = script.getField('CONTROLTARGET');
                const value         = script.getNumberValue('VALUE');

                return Entry.BigwaveRoboticsBase.sendControlQuadSingle(script, 0x10, controlTarget, value, 0, false);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_quad_one(%1, %2)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_roll,     'control_quad8_roll'],
                                    [Lang.Blocks.drone_control_quad_pitch,    'control_quad8_pitch'],
                                    [Lang.Blocks.drone_control_quad_yaw,      'control_quad8_yaw'],
                                    [Lang.Blocks.drone_control_quad_throttle, 'control_quad8_throttle'],
                                ],
                                value     : 'control_quad8_pitch',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_quad_one_delay: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_roll,     'control_quad8_roll'],
                        [Lang.Blocks.drone_control_quad_pitch,    'control_quad8_pitch'],
                        [Lang.Blocks.drone_control_quad_yaw,      'control_quad8_yaw'],
                        [Lang.Blocks.drone_control_quad_throttle, 'control_quad8_throttle'],
                    ],
                    value     : 'control_quad8_pitch',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    null,
                    { type: 'number', params: ['100'] },
                    { type: 'number', params: ['1'] },
                    null,
                ],
                type: 'BigwaveRoboticsFome_control_quad_one_delay',
            },
            paramsKeyMap: {
                CONTROLTARGET: 0,
                VALUE        : 1,
                TIME         : 2,
            },
            class   : 'control_quad',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const controlTarget = script.getField('CONTROLTARGET');
                const value         = script.getNumberValue('VALUE');
                const time          = script.getNumberValue('TIME') * 1000;

                return Entry.BigwaveRoboticsBase.sendControlQuadSingle(script, 0x10, controlTarget, value, time, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_quad_one_delay(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_roll,     'control_quad8_roll'],
                                    [Lang.Blocks.drone_control_quad_pitch,    'control_quad8_pitch'],
                                    [Lang.Blocks.drone_control_quad_yaw,      'control_quad8_yaw'],
                                    [Lang.Blocks.drone_control_quad_throttle, 'control_quad8_throttle'],
                                ],
                                value     : 'control_quad8_pitch',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_quad: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['0'] },
                    null,
                ],
                type: 'BigwaveRoboticsFome_control_quad',
            },
            paramsKeyMap: {
                ROLL    : 0,
                PITCH   : 1,
                YAW     : 2,
                THROTTLE: 3,
            },
            class   : 'control_quad',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const roll     = script.getNumberValue('ROLL');
                const pitch    = script.getNumberValue('PITCH');
                const yaw      = script.getNumberValue('YAW');
                const throttle = script.getNumberValue('THROTTLE');

                return Entry.BigwaveRoboticsBase.sendControlQuad(script, 0x10, roll, pitch, yaw, throttle, 0, false);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_quad(%1, %2, %3, %4)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_quad_delay: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['1'] },
                    null,
                ],
                type: 'BigwaveRoboticsFome_control_quad_delay',
            },
            paramsKeyMap: {
                ROLL    : 0,
                PITCH   : 1,
                YAW     : 2,
                THROTTLE: 3,
                TIME    : 4,
            },
            class   : 'control_quad',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const roll     = script.getNumberValue('ROLL');
                const pitch    = script.getNumberValue('PITCH');
                const yaw      = script.getNumberValue('YAW');
                const throttle = script.getNumberValue('THROTTLE');
                const time     = script.getNumberValue('TIME') * 1000;

                return Entry.BigwaveRoboticsBase.sendControlQuad(script, 0x10, roll, pitch, yaw, throttle, time, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_quad_delay(%1, %2, %3, %4, %5)',
                        textParams: [
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_position_one: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_pitch_forward,  'pitch_forward'],
                        [Lang.Blocks.drone_control_quad_pitch_backward, 'pitch_backward'],
                        [Lang.Blocks.drone_control_quad_roll_left,      'roll_left'],
                        [Lang.Blocks.drone_control_quad_roll_right,     'roll_right'],
                        [Lang.Blocks.drone_control_quad_throttle_up,    'throttle_up'],
                        [Lang.Blocks.drone_control_quad_throttle_down,  'throttle_down'],
                    ],
                    value     : 'pitch_forward',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [null, { type: 'number', params: ['1'] }, { type: 'number', params: ['1'] }, null],
                type  : 'BigwaveRoboticsFome_control_position_one',
            },
            paramsKeyMap: {
                CONTROLDIRECTION: 0,
                DISTANCE        : 1,
                SPEED           : 2,
            },
            class   : 'control_position',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const controlDirection = script.getField('CONTROLDIRECTION');
                const distance         = script.getNumberValue('DISTANCE');
                const speed            = script.getNumberValue('SPEED');
                let   time             = 0;
                
                if( speed > 0 )
                {
                    time = Math.abs(distance / speed) * 1000 + Math.min(1000 * speed, 3000) + 3000;
                }

                let x = 0;
                let y = 0;
                let z = 0;

                switch( controlDirection )
                {
                    case    'pitch_forward':   x = distance;   break;
                    case    'pitch_backward':  x = -distance;  break;
                    case    'roll_left':       y = distance;   break;
                    case    'roll_right':      y = -distance;  break;
                    case    'throttle_up':     z = distance;   break;
                    default:                z    = -distance;  break;
                }

                return Entry.BigwaveRoboticsBase.sendControlPosition(script, 0x10, x, y, z, speed, 0, 0, time, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_position_one(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_pitch_forward,  'pitch_forward'],
                                    [Lang.Blocks.drone_control_quad_pitch_backward, 'pitch_backward'],
                                    [Lang.Blocks.drone_control_quad_roll_left,      'roll_left'],
                                    [Lang.Blocks.drone_control_quad_roll_right,     'roll_right'],
                                    [Lang.Blocks.drone_control_quad_throttle_up,    'throttle_up'],
                                    [Lang.Blocks.drone_control_quad_throttle_down,  'throttle_down'],
                                ],
                                value     : 'pitch_forward',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_position_turn: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_yaw_cw,  '-1'],
                        [Lang.Blocks.drone_control_quad_yaw_ccw, '+1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    null,
                    { type: 'number', params: ['90'] },
                    { type: 'number', params: ['45'] },
                    null
                ],
                type: 'BigwaveRoboticsFome_control_position_turn',
            },
            paramsKeyMap: {
                DIRECTION_YAW: 0,
                DEGREE_YAW   : 1,
                SPEED_YAW    : 2,
            },
            class   : 'control_position',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const directionYaw = script.getNumberValue('DIRECTION_YAW');
                const degree       = script.getNumberValue('DEGREE_YAW');
                const yaw          = directionYaw * degree;
                const speedYaw     = script.getNumberValue('SPEED_YAW');

                let time = 0;

                if( speedYaw > 0 )
                {
                    time = Math.abs(degree / speedYaw) * 2 * 1000 + 3000;
                }

                return Entry.BigwaveRoboticsBase.sendControlPosition(script, 0x10, 0, 0, 0, 0, yaw, speedYaw, time, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_position_turn(%1, %2, %3)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_yaw_cw,  '-1'],
                                    [Lang.Blocks.drone_control_quad_yaw_ccw, '+1'],
                                ],
                                value     : '+1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_position_location: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_pitch_forward,  '+1'],
                        [Lang.Blocks.drone_control_quad_pitch_backward, '-1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_roll_left,      '+1'],
                        [Lang.Blocks.drone_control_quad_roll_right,     '-1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_throttle_up,    '+1'],
                        [Lang.Blocks.drone_control_quad_throttle_down,  '-1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    null,
                    { type: 'number', params: ['1'] },
                    null,
                    { type: 'number', params: ['0'] },
                    null,
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['1'] },
                    null],
                type: 'BigwaveRoboticsFome_control_position_location',
            },
            paramsKeyMap: {
                DIRECTION_PITCH   : 0,
                DISTANCE_PITCH    : 1,
                DIRECTION_ROLL    : 2,
                DISTANCE_ROLL     : 3,
                DIRECTION_THROTTLE: 4,
                DISTANCE_THROTTLE : 5,
                SPEED             : 6
            },
            class   : 'control_position',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const directionPitch    = script.getNumberValue('DIRECTION_PITCH');
                const directionRoll     = script.getNumberValue('DIRECTION_ROLL');
                const directionThrottle = script.getNumberValue('DIRECTION_THROTTLE');
                
                const x = directionPitch     * script.getNumberValue('DISTANCE_PITCH');
                const y = directionRoll      * script.getNumberValue('DISTANCE_ROLL');
                const z = directionThrottle  * script.getNumberValue('DISTANCE_THROTTLE');

                const distance = Math.sqrt((x * x) + (y * y) + (z * z));

                const speed = script.getNumberValue('SPEED');

                let time = 0;

                if( speed > 0 )
                {
                    time = Math.abs(distance / speed) * 1000 + Math.min(1000 * speed, 3000) + 3000;
                }

                return Entry.BigwaveRoboticsBase.sendControlPosition(script, 0x10, x, y, z, speed, 0, 0, time, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_position_location(%1, %2, %3, %4, %5, %6, %7)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_pitch_forward,  '+1'],
                                    [Lang.Blocks.drone_control_quad_pitch_backward, '-1'],
                                ],
                                value     : '+1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_roll_left,      '+1'],
                                    [Lang.Blocks.drone_control_quad_roll_right,     '-1'],
                                ],
                                value     : '+1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_throttle_up,    '+1'],
                                    [Lang.Blocks.drone_control_quad_throttle_down,  '-1'],
                                ],
                                value     : '+1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },

        BigwaveRoboticsFome_control_position_location_turn: {
            color     : EntryStatic.colorSet.block.default.HARDWARE,
            outerLine : EntryStatic.colorSet.block.darken.HARDWARE,
            skeleton  : 'basic',
            statements: [],
            params    : [
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_pitch_forward,  '+1'],
                        [Lang.Blocks.drone_control_quad_pitch_backward, '-1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_roll_left,      '+1'],
                        [Lang.Blocks.drone_control_quad_roll_right,     '-1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_throttle_up,    '+1'],
                        [Lang.Blocks.drone_control_quad_throttle_down,  '-1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                {
                    type   : 'Dropdown',
                    options: [
                        [Lang.Blocks.drone_control_quad_yaw_cw,  '-1'],
                        [Lang.Blocks.drone_control_quad_yaw_ccw, '+1'],
                    ],
                    value     : '+1',
                    fontSize  : 11,
                    bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                    arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                },
                { type: 'Block', accept: 'string' },
                { type: 'Block', accept: 'string' },
                { type: 'Indicator', img: 'block_icon/hardware_icon.svg', size: 12 },
            ],
            events: {},
            def   : {
                params: [
                    null,
                    { type: 'number', params: ['1'] },
                    null,
                    { type: 'number', params: ['0'] },
                    null,
                    { type: 'number', params: ['0'] },
                    { type: 'number', params: ['1'] },
                    null,
                    { type: 'number', params: ['90'] },
                    { type: 'number', params: ['45'] },
                    null],
                type: 'BigwaveRoboticsFome_control_position_location_turn',
            },
            paramsKeyMap: {
                DIRECTION_PITCH   : 0,
                DISTANCE_PITCH    : 1,
                DIRECTION_ROLL    : 2,
                DISTANCE_ROLL     : 3,
                DIRECTION_THROTTLE: 4,
                DISTANCE_THROTTLE : 5,
                SPEED             : 6,
                DIRECTION_YAW     : 7,
                DEGREE_YAW        : 8,
                SPEED_YAW         : 9,
            },
            class   : 'control_position',
            isNotFor: ['BigwaveRoboticsFome'],
            func(sprite, script)
            {
                const directionPitch    = script.getNumberValue('DIRECTION_PITCH');
                const directionRoll     = script.getNumberValue('DIRECTION_ROLL');
                const directionThrottle = script.getNumberValue('DIRECTION_THROTTLE');
                
                const x = directionPitch     * script.getNumberValue('DISTANCE_PITCH');
                const y = directionRoll      * script.getNumberValue('DISTANCE_ROLL');
                const z = directionThrottle  * script.getNumberValue('DISTANCE_THROTTLE');

                const distance = Math.sqrt((x * x) + (y * y) + (z * z));
                const speed    = script.getNumberValue('SPEED');

                const directionYaw = script.getNumberValue('DIRECTION_YAW');
                const degree       = script.getNumberValue('DEGREE_YAW');
                const yaw          = directionYaw * degree;
                const speedYaw     = script.getNumberValue('SPEED_YAW');

                let timePosition = 0;
                let timeRotation = 0;

                if( speed > 0 )
                {
                    timePosition = Math.abs(distance / speed) * 1000 + Math.min(1000 * speed, 3000) + 3000;
                }

                if( speedYaw > 0 )
                {
                    timeRotation = Math.abs(degree / speedYaw) * 2 * 1000 + 3000;
                }

                const time = Math.max(timePosition, timeRotation);

                return Entry.BigwaveRoboticsBase.sendControlPosition(script, 0x10, x, y, z, speed, yaw, speedYaw, time, true);
            },
            syntax: {
                js: [],
                py: [
                    {
                        syntax    : 'Drone.control_position_location_turn(%1, %2, %3, %4, %5, %6, %7, %8, %9, %10)',
                        textParams: [
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_pitch_forward,  '+1'],
                                    [Lang.Blocks.drone_control_quad_pitch_backward, '-1'],
                                ],
                                value     : '+1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_roll_left,      '+1'],
                                    [Lang.Blocks.drone_control_quad_roll_right,     '-1'],
                                ],
                                value     : '+1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_throttle_up,    '+1'],
                                    [Lang.Blocks.drone_control_quad_throttle_down,  '-1'],
                                ],
                                value     : '+1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type   : 'Dropdown',
                                options: [
                                    [Lang.Blocks.drone_control_quad_yaw_cw,  '-1'],
                                    [Lang.Blocks.drone_control_quad_yaw_ccw, '+1'],
                                ],
                                value     : '-1',
                                fontSize  : 11,
                                bgColor   : EntryStatic.colorSet.block.darken.HARDWARE,
                                arrowColor: EntryStatic.colorSet.arrow.default.HARDWARE,
                                converter : Entry.block.converters.returnStringValue,
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                            {
                                type  : 'Block',
                                accept: 'string',
                            },
                        ],
                    },
                ],
            },
        },
    };
};


module.exports = Entry.BigwaveRoboticsFome;

