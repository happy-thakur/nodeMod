"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const core_1 = require("@angular-devkit/core");
const exception_1 = require("../exception/exception");
const interface_1 = require("./interface");
const recorder_1 = require("./recorder");
class CannotCreateFileException extends core_1.BaseException {
    constructor(path) { super(`Cannot create file "${path}".`); }
}
exports.CannotCreateFileException = CannotCreateFileException;
class NullTreeDirEntry {
    constructor(path) {
        this.path = path;
        this.subdirs = [];
        this.subfiles = [];
    }
    get parent() {
        return this.path == '/' ? null : new NullTreeDirEntry(core_1.dirname(this.path));
    }
    dir(name) {
        return new NullTreeDirEntry(core_1.join(this.path, name));
    }
    file(_name) { return null; }
    visit() { }
}
exports.NullTreeDirEntry = NullTreeDirEntry;
class NullTree {
    constructor() {
        this.root = new NullTreeDirEntry(core_1.normalize('/'));
    }
    [interface_1.TreeSymbol]() {
        return this;
    }
    branch() {
        return new NullTree();
    }
    merge(_other, _strategy) { }
    // Simple readonly file system operations.
    exists(_path) { return false; }
    read(_path) { return null; }
    get(_path) { return null; }
    getDir(path) { return new NullTreeDirEntry(core_1.normalize('/' + path)); }
    visit() { }
    // Change content of host files.
    beginUpdate(path) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    commitUpdate(record) {
        throw new exception_1.FileDoesNotExistException(record instanceof recorder_1.UpdateRecorderBase
            ? record.path
            : '<unknown>');
    }
    // Change structure of the host.
    copy(path, _to) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    delete(path) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    create(path, _content) {
        throw new CannotCreateFileException(path);
    }
    rename(path, _to) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    overwrite(path, _content) {
        throw new exception_1.FileDoesNotExistException(path);
    }
    apply(_action, _strategy) { }
    get actions() {
        return [];
    }
}
exports.NullTree = NullTree;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnVsbC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaGFuc2wvU291cmNlcy9oYW5zbC9kZXZraXQvIiwic291cmNlcyI6WyJwYWNrYWdlcy9hbmd1bGFyX2RldmtpdC9zY2hlbWF0aWNzL3NyYy90cmVlL251bGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0dBTUc7QUFDSCwrQ0FPOEI7QUFDOUIsc0RBQW1FO0FBRW5FLDJDQUF3RjtBQUN4Rix5Q0FBZ0Q7QUFHaEQsK0JBQXVDLFNBQVEsb0JBQWE7SUFDMUQsWUFBWSxJQUFZLElBQUksS0FBSyxDQUFDLHVCQUF1QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN0RTtBQUZELDhEQUVDO0FBR0Q7SUFLRSxZQUE0QixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUU3QixZQUFPLEdBQW1CLEVBQUUsQ0FBQztRQUM3QixhQUFRLEdBQW1CLEVBQUUsQ0FBQztJQUhFLENBQUM7SUFKMUMsSUFBSSxNQUFNO1FBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksZ0JBQWdCLENBQUMsY0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7SUFPRCxHQUFHLENBQUMsSUFBa0I7UUFDcEIsTUFBTSxDQUFDLElBQUksZ0JBQWdCLENBQUMsV0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSSxDQUFDLEtBQW1CLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFFMUMsS0FBSyxLQUFJLENBQUM7Q0FDWDtBQWhCRCw0Q0FnQkM7QUFHRDtJQUFBO1FBVVcsU0FBSSxHQUFhLElBQUksZ0JBQWdCLENBQUMsZ0JBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBd0NqRSxDQUFDO0lBakRDLENBQUMsc0JBQVUsQ0FBQztRQUNWLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFDRCxLQUFLLENBQUMsTUFBWSxFQUFFLFNBQXlCLElBQVMsQ0FBQztJQUl2RCwwQ0FBMEM7SUFDMUMsTUFBTSxDQUFDLEtBQWEsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2QyxJQUFJLENBQUMsS0FBYSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLEdBQUcsQ0FBQyxLQUFhLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkMsTUFBTSxDQUFDLElBQVksSUFBSSxNQUFNLENBQUMsSUFBSSxnQkFBZ0IsQ0FBQyxnQkFBUyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RSxLQUFLLEtBQUksQ0FBQztJQUVWLGdDQUFnQztJQUNoQyxXQUFXLENBQUMsSUFBWTtRQUN0QixNQUFNLElBQUkscUNBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELFlBQVksQ0FBQyxNQUFzQjtRQUNqQyxNQUFNLElBQUkscUNBQXlCLENBQUMsTUFBTSxZQUFZLDZCQUFrQjtZQUN0RSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUk7WUFDYixDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVELGdDQUFnQztJQUNoQyxJQUFJLENBQUMsSUFBWSxFQUFFLEdBQVc7UUFDNUIsTUFBTSxJQUFJLHFDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWTtRQUNqQixNQUFNLElBQUkscUNBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELE1BQU0sQ0FBQyxJQUFZLEVBQUUsUUFBeUI7UUFDNUMsTUFBTSxJQUFJLHlCQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBWSxFQUFFLEdBQVc7UUFDOUIsTUFBTSxJQUFJLHFDQUF5QixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFDRCxTQUFTLENBQUMsSUFBWSxFQUFFLFFBQXlCO1FBQy9DLE1BQU0sSUFBSSxxQ0FBeUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsS0FBSyxDQUFDLE9BQWUsRUFBRSxTQUF5QixJQUFTLENBQUM7SUFDMUQsSUFBSSxPQUFPO1FBQ1QsTUFBTSxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRjtBQWxERCw0QkFrREMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5pbXBvcnQge1xuICBCYXNlRXhjZXB0aW9uLFxuICBQYXRoLFxuICBQYXRoRnJhZ21lbnQsXG4gIGRpcm5hbWUsXG4gIGpvaW4sXG4gIG5vcm1hbGl6ZSxcbn0gZnJvbSAnQGFuZ3VsYXItZGV2a2l0L2NvcmUnO1xuaW1wb3J0IHsgRmlsZURvZXNOb3RFeGlzdEV4Y2VwdGlvbiB9IGZyb20gJy4uL2V4Y2VwdGlvbi9leGNlcHRpb24nO1xuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb24nO1xuaW1wb3J0IHsgRGlyRW50cnksIE1lcmdlU3RyYXRlZ3ksIFRyZWUsIFRyZWVTeW1ib2wsIFVwZGF0ZVJlY29yZGVyIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVXBkYXRlUmVjb3JkZXJCYXNlIH0gZnJvbSAnLi9yZWNvcmRlcic7XG5cblxuZXhwb3J0IGNsYXNzIENhbm5vdENyZWF0ZUZpbGVFeGNlcHRpb24gZXh0ZW5kcyBCYXNlRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IocGF0aDogc3RyaW5nKSB7IHN1cGVyKGBDYW5ub3QgY3JlYXRlIGZpbGUgXCIke3BhdGh9XCIuYCk7IH1cbn1cblxuXG5leHBvcnQgY2xhc3MgTnVsbFRyZWVEaXJFbnRyeSBpbXBsZW1lbnRzIERpckVudHJ5IHtcbiAgZ2V0IHBhcmVudCgpOiBEaXJFbnRyeSB8IG51bGwge1xuICAgIHJldHVybiB0aGlzLnBhdGggPT0gJy8nID8gbnVsbCA6IG5ldyBOdWxsVHJlZURpckVudHJ5KGRpcm5hbWUodGhpcy5wYXRoKSk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgcGF0aDogUGF0aCkge31cblxuICByZWFkb25seSBzdWJkaXJzOiBQYXRoRnJhZ21lbnRbXSA9IFtdO1xuICByZWFkb25seSBzdWJmaWxlczogUGF0aEZyYWdtZW50W10gPSBbXTtcblxuICBkaXIobmFtZTogUGF0aEZyYWdtZW50KTogRGlyRW50cnkge1xuICAgIHJldHVybiBuZXcgTnVsbFRyZWVEaXJFbnRyeShqb2luKHRoaXMucGF0aCwgbmFtZSkpO1xuICB9XG4gIGZpbGUoX25hbWU6IFBhdGhGcmFnbWVudCkgeyByZXR1cm4gbnVsbDsgfVxuXG4gIHZpc2l0KCkge31cbn1cblxuXG5leHBvcnQgY2xhc3MgTnVsbFRyZWUgaW1wbGVtZW50cyBUcmVlIHtcbiAgW1RyZWVTeW1ib2xdKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgYnJhbmNoKCk6IFRyZWUge1xuICAgIHJldHVybiBuZXcgTnVsbFRyZWUoKTtcbiAgfVxuICBtZXJnZShfb3RoZXI6IFRyZWUsIF9zdHJhdGVneT86IE1lcmdlU3RyYXRlZ3kpOiB2b2lkIHt9XG5cbiAgcmVhZG9ubHkgcm9vdDogRGlyRW50cnkgPSBuZXcgTnVsbFRyZWVEaXJFbnRyeShub3JtYWxpemUoJy8nKSk7XG5cbiAgLy8gU2ltcGxlIHJlYWRvbmx5IGZpbGUgc3lzdGVtIG9wZXJhdGlvbnMuXG4gIGV4aXN0cyhfcGF0aDogc3RyaW5nKSB7IHJldHVybiBmYWxzZTsgfVxuICByZWFkKF9wYXRoOiBzdHJpbmcpIHsgcmV0dXJuIG51bGw7IH1cbiAgZ2V0KF9wYXRoOiBzdHJpbmcpIHsgcmV0dXJuIG51bGw7IH1cbiAgZ2V0RGlyKHBhdGg6IHN0cmluZykgeyByZXR1cm4gbmV3IE51bGxUcmVlRGlyRW50cnkobm9ybWFsaXplKCcvJyArIHBhdGgpKTsgfVxuICB2aXNpdCgpIHt9XG5cbiAgLy8gQ2hhbmdlIGNvbnRlbnQgb2YgaG9zdCBmaWxlcy5cbiAgYmVnaW5VcGRhdGUocGF0aDogc3RyaW5nKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBGaWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uKHBhdGgpO1xuICB9XG4gIGNvbW1pdFVwZGF0ZShyZWNvcmQ6IFVwZGF0ZVJlY29yZGVyKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBGaWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uKHJlY29yZCBpbnN0YW5jZW9mIFVwZGF0ZVJlY29yZGVyQmFzZVxuICAgICAgPyByZWNvcmQucGF0aFxuICAgICAgOiAnPHVua25vd24+Jyk7XG4gIH1cblxuICAvLyBDaGFuZ2Ugc3RydWN0dXJlIG9mIHRoZSBob3N0LlxuICBjb3B5KHBhdGg6IHN0cmluZywgX3RvOiBzdHJpbmcpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb24ocGF0aCk7XG4gIH1cbiAgZGVsZXRlKHBhdGg6IHN0cmluZyk6IG5ldmVyIHtcbiAgICB0aHJvdyBuZXcgRmlsZURvZXNOb3RFeGlzdEV4Y2VwdGlvbihwYXRoKTtcbiAgfVxuICBjcmVhdGUocGF0aDogc3RyaW5nLCBfY29udGVudDogQnVmZmVyIHwgc3RyaW5nKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBDYW5ub3RDcmVhdGVGaWxlRXhjZXB0aW9uKHBhdGgpO1xuICB9XG4gIHJlbmFtZShwYXRoOiBzdHJpbmcsIF90bzogc3RyaW5nKTogbmV2ZXIge1xuICAgIHRocm93IG5ldyBGaWxlRG9lc05vdEV4aXN0RXhjZXB0aW9uKHBhdGgpO1xuICB9XG4gIG92ZXJ3cml0ZShwYXRoOiBzdHJpbmcsIF9jb250ZW50OiBCdWZmZXIgfCBzdHJpbmcpOiBuZXZlciB7XG4gICAgdGhyb3cgbmV3IEZpbGVEb2VzTm90RXhpc3RFeGNlcHRpb24ocGF0aCk7XG4gIH1cblxuICBhcHBseShfYWN0aW9uOiBBY3Rpb24sIF9zdHJhdGVneT86IE1lcmdlU3RyYXRlZ3kpOiB2b2lkIHt9XG4gIGdldCBhY3Rpb25zKCk6IEFjdGlvbltdIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiJdfQ==