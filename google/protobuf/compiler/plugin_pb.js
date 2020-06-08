// source: google/protobuf/compiler/plugin.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

import * as jspb from '../../../google-protobuf.js'
var goog = jspb;
var global = Function('return this')();

import * as google_protobuf_descriptor_pb from '../../../google/protobuf/descriptor_pb.js'
goog.object.extend(proto, google_protobuf_descriptor_pb);
goog.exportSymbol('proto.google.protobuf.compiler.CodeGeneratorRequest', null, global);
goog.exportSymbol('proto.google.protobuf.compiler.CodeGeneratorResponse', null, global);
goog.exportSymbol('proto.google.protobuf.compiler.CodeGeneratorResponse.Feature', null, global);
goog.exportSymbol('proto.google.protobuf.compiler.CodeGeneratorResponse.File', null, global);
goog.exportSymbol('proto.google.protobuf.compiler.Version', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.compiler.Version = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.compiler.Version, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.compiler.Version.displayName = 'proto.google.protobuf.compiler.Version';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.compiler.CodeGeneratorRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.compiler.CodeGeneratorRequest.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.compiler.CodeGeneratorRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.compiler.CodeGeneratorRequest.displayName = 'proto.google.protobuf.compiler.CodeGeneratorRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.compiler.CodeGeneratorResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.google.protobuf.compiler.CodeGeneratorResponse.repeatedFields_, null);
};
goog.inherits(proto.google.protobuf.compiler.CodeGeneratorResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.compiler.CodeGeneratorResponse.displayName = 'proto.google.protobuf.compiler.CodeGeneratorResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.google.protobuf.compiler.CodeGeneratorResponse.File, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.google.protobuf.compiler.CodeGeneratorResponse.File.displayName = 'proto.google.protobuf.compiler.CodeGeneratorResponse.File';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.compiler.Version.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.compiler.Version.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.compiler.Version} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.Version.toObject = function(includeInstance, msg) {
  var f, obj = {
    major: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    minor: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    patch: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    suffix: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.compiler.Version}
 */
proto.google.protobuf.compiler.Version.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.compiler.Version;
  return proto.google.protobuf.compiler.Version.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.compiler.Version} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.compiler.Version}
 */
proto.google.protobuf.compiler.Version.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMajor(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinor(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPatch(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSuffix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.compiler.Version.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.compiler.Version.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.compiler.Version} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.Version.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 major = 1;
 * @return {number}
 */
proto.google.protobuf.compiler.Version.prototype.getMajor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.setMajor = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.clearMajor = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.Version.prototype.hasMajor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 minor = 2;
 * @return {number}
 */
proto.google.protobuf.compiler.Version.prototype.getMinor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.setMinor = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.clearMinor = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.Version.prototype.hasMinor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 patch = 3;
 * @return {number}
 */
proto.google.protobuf.compiler.Version.prototype.getPatch = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.setPatch = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.clearPatch = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.Version.prototype.hasPatch = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string suffix = 4;
 * @return {string}
 */
proto.google.protobuf.compiler.Version.prototype.getSuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.setSuffix = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.Version} returns this
 */
proto.google.protobuf.compiler.Version.prototype.clearSuffix = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.Version.prototype.hasSuffix = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.repeatedFields_ = [1,15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.compiler.CodeGeneratorRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.compiler.CodeGeneratorRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileToGenerateList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    parameter: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    protoFileList: jspb.Message.toObjectList(msg.getProtoFileList(),
    google_protobuf_descriptor_pb.FileDescriptorProto.toObject, includeInstance),
    compilerVersion: (f = msg.getCompilerVersion()) && proto.google.protobuf.compiler.Version.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.compiler.CodeGeneratorRequest;
  return proto.google.protobuf.compiler.CodeGeneratorRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addFileToGenerate(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParameter(value);
      break;
    case 15:
      var value = new google_protobuf_descriptor_pb.FileDescriptorProto;
      reader.readMessage(value,google_protobuf_descriptor_pb.FileDescriptorProto.deserializeBinaryFromReader);
      msg.addProtoFile(value);
      break;
    case 3:
      var value = new proto.google.protobuf.compiler.Version;
      reader.readMessage(value,proto.google.protobuf.compiler.Version.deserializeBinaryFromReader);
      msg.setCompilerVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.compiler.CodeGeneratorRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileToGenerateList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProtoFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      google_protobuf_descriptor_pb.FileDescriptorProto.serializeBinaryToWriter
    );
  }
  f = message.getCompilerVersion();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.google.protobuf.compiler.Version.serializeBinaryToWriter
    );
  }
};


/**
 * repeated string file_to_generate = 1;
 * @return {!Array<string>}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.getFileToGenerateList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.setFileToGenerateList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.addFileToGenerate = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.clearFileToGenerateList = function() {
  return this.setFileToGenerateList([]);
};


/**
 * optional string parameter = 2;
 * @return {string}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.getParameter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.setParameter = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.clearParameter = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.hasParameter = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated google.protobuf.FileDescriptorProto proto_file = 15;
 * @return {!Array<!proto.google.protobuf.FileDescriptorProto>}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.getProtoFileList = function() {
  return /** @type{!Array<!proto.google.protobuf.FileDescriptorProto>} */ (
    jspb.Message.getRepeatedWrapperField(this, google_protobuf_descriptor_pb.FileDescriptorProto, 15));
};


/**
 * @param {!Array<!proto.google.protobuf.FileDescriptorProto>} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
*/
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.setProtoFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.protobuf.FileDescriptorProto=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.FileDescriptorProto}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.addProtoFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.protobuf.FileDescriptorProto, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.clearProtoFileList = function() {
  return this.setProtoFileList([]);
};


/**
 * optional Version compiler_version = 3;
 * @return {?proto.google.protobuf.compiler.Version}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.getCompilerVersion = function() {
  return /** @type{?proto.google.protobuf.compiler.Version} */ (
    jspb.Message.getWrapperField(this, proto.google.protobuf.compiler.Version, 3));
};


/**
 * @param {?proto.google.protobuf.compiler.Version|undefined} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
*/
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.setCompilerVersion = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorRequest} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.clearCompilerVersion = function() {
  return this.setCompilerVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.CodeGeneratorRequest.prototype.hasCompilerVersion = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.compiler.CodeGeneratorResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    supportedFeatures: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    fileList: jspb.Message.toObjectList(msg.getFileList(),
    proto.google.protobuf.compiler.CodeGeneratorResponse.File.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.compiler.CodeGeneratorResponse;
  return proto.google.protobuf.compiler.CodeGeneratorResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setSupportedFeatures(value);
      break;
    case 15:
      var value = new proto.google.protobuf.compiler.CodeGeneratorResponse.File;
      reader.readMessage(value,proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinaryFromReader);
      msg.addFile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.compiler.CodeGeneratorResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getFileList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.google.protobuf.compiler.CodeGeneratorResponse.File.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.Feature = {
  FEATURE_NONE: 0,
  FEATURE_PROTO3_OPTIONAL: 1
};




if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.toObject = function(opt_includeInstance) {
  return proto.google.protobuf.compiler.CodeGeneratorResponse.File.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    insertionPoint: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    content: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.google.protobuf.compiler.CodeGeneratorResponse.File;
  return proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setInsertionPoint(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.google.protobuf.compiler.CodeGeneratorResponse.File.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.setName = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.clearName = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string insertion_point = 2;
 * @return {string}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.getInsertionPoint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.setInsertionPoint = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.clearInsertionPoint = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.hasInsertionPoint = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string content = 15;
 * @return {string}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.clearContent = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.File.prototype.hasContent = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string error = 1;
 * @return {string}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.setError = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.clearError = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 supported_features = 2;
 * @return {number}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.getSupportedFeatures = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.setSupportedFeatures = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.clearSupportedFeatures = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.hasSupportedFeatures = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated File file = 15;
 * @return {!Array<!proto.google.protobuf.compiler.CodeGeneratorResponse.File>}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.getFileList = function() {
  return /** @type{!Array<!proto.google.protobuf.compiler.CodeGeneratorResponse.File>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.google.protobuf.compiler.CodeGeneratorResponse.File, 15));
};


/**
 * @param {!Array<!proto.google.protobuf.compiler.CodeGeneratorResponse.File>} value
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse} returns this
*/
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.setFileList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.google.protobuf.compiler.CodeGeneratorResponse.File=} opt_value
 * @param {number=} opt_index
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse.File}
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.addFile = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.google.protobuf.compiler.CodeGeneratorResponse.File, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.google.protobuf.compiler.CodeGeneratorResponse} returns this
 */
proto.google.protobuf.compiler.CodeGeneratorResponse.prototype.clearFileList = function() {
  return this.setFileList([]);
};


export const CodeGeneratorRequest = proto.google.protobuf.compiler.CodeGeneratorRequest;
export const CodeGeneratorResponse = proto.google.protobuf.compiler.CodeGeneratorResponse;
export const Version = proto.google.protobuf.compiler.Version;
