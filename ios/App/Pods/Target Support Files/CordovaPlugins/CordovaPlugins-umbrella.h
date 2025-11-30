#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "BinaryRequestSerializer.h"
#import "BinaryResponseSerializer.h"
#import "CordovaHttpPlugin.h"
#import "SDNetworkActivityIndicator.h"
#import "SM_AFHTTPSessionManager.h"
#import "SM_AFNetworking.h"
#import "SM_AFNetworkReachabilityManager.h"
#import "SM_AFSecurityPolicy.h"
#import "SM_AFURLRequestSerialization.h"
#import "SM_AFURLResponseSerialization.h"
#import "SM_AFURLSessionManager.h"
#import "TextRequestSerializer.h"
#import "TextResponseSerializer.h"
#import "CDVAssetLibraryFilesystem.h"
#import "CDVFile.h"
#import "CDVLocalFilesystem.h"
#import "CDVLocation.h"
#import "RequestLocationAccuracy.h"

FOUNDATION_EXPORT double CordovaPluginsVersionNumber;
FOUNDATION_EXPORT const unsigned char CordovaPluginsVersionString[];

