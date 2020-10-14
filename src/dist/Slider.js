'use strict';var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _objectWithoutProperties2=_interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _RNCSliderNativeComponent=_interopRequireDefault(require("./RNCSliderNativeComponent"));var _jsxFileName="/Users/brade/dev/react-native-slider/src/js/Slider.js";var SliderComponent=function SliderComponent(props,forwardedRef){var style=_reactNative.StyleSheet.compose(styles.slider,props.style);var onValueChange=props.onValueChange,onSlidingStart=props.onSlidingStart,onSlidingComplete=props.onSlidingComplete,localProps=(0,_objectWithoutProperties2.default)(props,["onValueChange","onSlidingStart","onSlidingComplete"]);var onValueChangeEvent=onValueChange?function(event){var userEvent=true;if(_reactNative.Platform.OS==='android'){userEvent=event.nativeEvent.fromUser!=null&&event.nativeEvent.fromUser;}userEvent&&onValueChange(event.nativeEvent.value);}:null;var onChangeEvent=onValueChangeEvent;var onSlidingStartEvent=onSlidingStart?function(event){onSlidingStart(event.nativeEvent.value);}:null;var onSlidingCompleteEvent=onSlidingComplete?function(event){onSlidingComplete(event.nativeEvent.value);}:null;return _react.default.createElement(_RNCSliderNativeComponent.default,(0,_extends2.default)({},localProps,{thumbImage:_reactNative.Platform.OS==='web'?props.thumbImage:_reactNative.Image.resolveAssetSource(props.thumbImage),ref:forwardedRef,style:style,onChange:onChangeEvent,onRNCSliderSlidingStart:onSlidingStartEvent,onRNCSliderSlidingComplete:onSlidingCompleteEvent,onRNCSliderValueChange:onValueChangeEvent,enabled:!props.disabled,onStartShouldSetResponder:function onStartShouldSetResponder(){return true;},onResponderTerminationRequest:function onResponderTerminationRequest(){return false;},__source:{fileName:_jsxFileName,lineNumber:270,columnNumber:5}}));};var SliderWithRef=_react.default.forwardRef(SliderComponent);SliderWithRef.defaultProps={disabled:false,value:0,minimumValue:0,maximumValue:1,step:0,inverted:false};var styles;if(_reactNative.Platform.OS==='ios'){styles=_reactNative.StyleSheet.create({slider:{height:40}});}else{styles=_reactNative.StyleSheet.create({slider:{}});}var Slider=SliderWithRef;var _default=Slider;exports.default=_default;